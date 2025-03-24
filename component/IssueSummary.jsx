import React, { useEffect, useState } from "react";
import axios from "axios";

const IssueSummary = ({ issueId }) => {
  const [summary, setSummary] = useState("Loading summary...");

  useEffect(() => {
    if (!issueId) {
      setSummary("Select an issue to view the summary.");
      return;
    }

    axios
      .get(`http://127.0.0.1:5000/api/issues/${issueId}/summary`)
      .then((response) => {
        setSummary(response.data.summary || "No summary available.");
      })
      .catch((error) => {
        console.error("Error fetching summary:", error);
        setSummary("Failed to load summary.");
      });
  }, [issueId]);

  return (
    <div className="issue-summary">
      <h2>Issue Summary</h2>
      <p>{summary}</p>
    </div>
  );
};

export default IssueSummary;
