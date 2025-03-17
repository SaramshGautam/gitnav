import { useState } from "react";
import "./App.css";
import Navbar from "../component/Nabvar";
import UserQuery from "../component/UserQuery";
import IssueList from "../component/IssueList";
import IssueDetail from "../component/IssueDetail";

// function App() {
//   const [selectedIssueId, setSelectedIssueId] = useState(null);

//   return (
//     <div>
//       <Navbar />
//       {/* <UserQuery /> */}
//       <div style={{ width: "50%" }}>
//         <IssueList onSelectIssue={setSelectedIssueId} />
//       </div>
//       <div style={{ width: "50%" }}>
//         <IssueDetail issueId={selectedIssueId} />
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import IssueList from "./IssueList";
// import IssueDetail from "./IssueDetail";

function App() {
  const [selectedIssue, setSelectedIssue] = useState(null);

  return (
    <>
      {/* <div className="navbar">
        <Navbar />
      </div> */}

      <div className="app-container">
        {/* <Navbar /> */}
        {/* Left Panel */}
        <div className="side-panel">
          <div className={`issue-list ${selectedIssue ? "collapsed" : ""}`}>
            <IssueList onSelectIssue={setSelectedIssue} />
          </div>
          {selectedIssue && (
            <div className="issue-detail">
              <IssueDetail
                issueId={selectedIssue}
                onBack={() => setSelectedIssue(null)}
              />
            </div>
          )}
        </div>

        {/* Right Side (Can be expanded in future) */}
        <div className="main-content"></div>
      </div>
    </>
  );
}

export default App;
