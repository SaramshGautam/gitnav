from flask import Flask, jsonify
import firebase_admin
from firebase_admin import credentials, firestore
from flask_cors import CORS
import openai

cred = credentials.Certificate('gitnav-firestore-key.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

openai.api_key = 'Add your api key' 

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/issues', methods=['GET'])
def get_issues():
    issues_ref = db.collection('github_issues')
    query = issues_ref.order_by('created_at', direction=firestore.Query.DESCENDING).limit(50)
    results = query.stream()

    issues = []
    for doc in results:
        issue = doc.to_dict()
        issue['id'] = doc.id  # Include document ID in the response
        issues.append(issue)

    return jsonify(issues)

@app.route('/api/issues/<issue_id>', methods=['GET'])
def get_issue_detail(issue_id):
    doc = db.collection('github_issues').document(issue_id).get()
    if doc.exists:
        return jsonify(doc.to_dict())
    else:
        return jsonify({'error': 'Issue not found'}), 404
    
@app.route('/api/issues/<issue_id>/summary', methods=['GET'])
def get_issue_summary(issue_id):
    doc = db.collection('github_issues').document(issue_id).get()
    if not doc.exists:
        return jsonify({'error': 'Issue not found'}), 404

    issue_content = doc.to_dict().get('body')  # or change 'body' to the correct field name
    if not issue_content:
        return jsonify({'error': 'No content available to summarize'}), 400

    # Send the content to OpenAI for summarization using the chatgpt-4o model
    try:
        response = openai.chat.completions.create(
            model="gpt-4",  # Specify the chatgpt-4o model
            messages=[{"role": "system", "content": "Please summarize the following GitHub issue content:"},
                      {"role": "user", "content": issue_content}],
            max_tokens=150  # Adjust the token count based on desired summary length
        )
        summary = response.choices[0].message.content.strip() if response.choices[0].message else "No summary available"

        print(summary)
        return jsonify({'summary': summary})
    except Exception as e:
        return jsonify({'error': 'Failed to generate summary', 'details': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)

