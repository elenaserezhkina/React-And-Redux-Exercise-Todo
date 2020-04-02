import React from "react";
import "./App.css";
import HocDemo from "./Hoc-demo/HocDemo";
import ReduxDemo from "./Redux-demo/index";

function App() {
  return (
    <div className="App">
      <ReduxDemo />
      {/* <HocDemo /> */}
    </div>
  );
}

export default App;
