from flask import Flask, jsonify
import firebase_admin
from firebase_admin import credentials, firestore
from flask_cors import CORS

cred = credentials.Certificate('gitnav-firestore-key.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

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



if __name__ == '__main__':
    app.run(debug=True)

