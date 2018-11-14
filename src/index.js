import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import IssueList from "./components/IssueList";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="Appp">
        <Header title="Issue Tracker" />
        <IssueList />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
