import { useState } from "react";
import "./App.css";
import Navbar from "../component/Nabvar";
import UserQuery from "../component/UserQuery";
import IssueList from "../component/IssueList";
import IssueDetail from "../component/IssueDetail";

function App() {
  const [selectedIssueId, setSelectedIssueId] = useState(null);

  return (
    <div>
      <Navbar />
      {/* <UserQuery /> */}
      <div style={{ width: "50%" }}>
        <IssueList onSelectIssue={setSelectedIssueId} />
      </div>
      <div style={{ width: "50%" }}>
        <IssueDetail issueId={selectedIssueId} />
      </div>
    </div>
  );
}

export default App;
