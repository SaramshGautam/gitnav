import React, { useEffect, useState } from "react";
import axios from "axios";

const IssueList = ({ onSelectIssue }) => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/issues")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setIssues(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
          setIssues([]); // Ensure issues is always an array
        }
      })
      .catch((error) => {
        console.error("Error fetching issues:", error);
        setIssues([]); // Set issues to an empty array on error
      });
  }, []);

  return (
    <div>
      <h2>Issues</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id} onClick={() => onSelectIssue(issue.id)}>
            {issue.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;
