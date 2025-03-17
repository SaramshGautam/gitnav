// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const IssueDetail = ({ issueId }) => {
//   const [issue, setIssue] = useState(null);

//   useEffect(() => {
//     if (issueId) {
//       axios
//         .get(`http://127.0.0.1:5000/api/issues/${issueId}`)
//         .then((response) => setIssue(response.data))
//         .catch((error) =>
//           console.error("Error fetching issue details:", error)
//         );
//     }
//   }, [issueId]);

//   if (!issue) return <p>Select an issue to see the details</p>;

//   return (
//     <div>
//       <h2>{issue.title}</h2>
//       <p>{issue.description}</p>
//       {/* Render other details as needed */}
//     </div>
//   );
// };

// export default IssueDetail;

import React, { useEffect, useState } from "react";
import axios from "axios";

const IssueDetail = ({ issueId, onBack }) => {
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    if (!issueId) return;
    axios
      .get(`http://127.0.0.1:5000/api/issues/${issueId}`)
      .then((response) => setIssue(response.data))
      .catch((error) => console.error("Error fetching issue details:", error));
  }, [issueId]);

  if (!issue) return <p>Loading issue details...</p>;

  return (
    <div className="issue-detail-container">
      <button onClick={onBack} className="back-button">
        ← Back to Issues
      </button>
      <h1 style={{ color: "#555" }}>{issue.title}</h1>
      <p className="issue-meta" style={{ color: "#555" }}>
        #{issue.number} opened by <strong>{issue.user.login}</strong> on{" "}
        {new Date(issue.created_at).toLocaleDateString()}
      </p>
      <hr />
      <div className="issue-body">
        <p>{issue.body || "No description provided."}</p>
      </div>
      <a
        href={issue.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default IssueDetail;
