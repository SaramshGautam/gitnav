import React, { useEffect, useState } from "react";
import axios from "axios";

const IssueDetail = ({ issueId }) => {
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    if (issueId) {
      axios
        .get(`http://127.0.0.1:5000/api/issues/${issueId}`)
        .then((response) => setIssue(response.data))
        .catch((error) =>
          console.error("Error fetching issue details:", error)
        );
    }
  }, [issueId]);

  if (!issue) return <p>Select an issue to see the details</p>;

  return (
    <div>
      <h2>{issue.title}</h2>
      <p>{issue.description}</p>
      {/* Render other details as needed */}
    </div>
  );
};

export default IssueDetail;
