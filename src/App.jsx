import { useState } from "react";
import "./App.css";
import Navbar from "../component/Nabvar";
import UserQuery from "../component/UserQuery";

function App() {
  return (
    <div>
      <Navbar />
      <UserQuery />
    </div>
  );
}

export default App;
