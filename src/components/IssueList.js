import React from "react";
import Issue from "./Issue";
import AddIssue from "./AddIssue";

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = {
      issues: []
    };
    this.handleAddIssue = this.handleAddIssue.bind(this);
    // this.handleDelete=this.handleDelete.bind(this)
  }
  handleAddIssue = issue => {
    //copy the current state
    let issueCopy = Object.assign([], this.state.issues);
    //add the information from the AddIssue component
    issueCopy.push(issue);
    //set the state to the issueCopy
    this.setState({ issues: issueCopy });
  };
  handleDelete = i => {
    //copy the current state
    const issuesToDelete = Object.assign([], this.state.issues);
    // remove the item in the array with the index of (i)
    issuesToDelete.splice(i, 1);
    //set the state to issuesToDelete
    this.setState({ issues: issuesToDelete });
  };
  render() {
    return (
      <div className="container">
        {this.state.issues.length === 0
          ? "There are no issues"
          : `${this.state.issues.length} issue(s)`}
        <AddIssue handleAddIssue={this.handleAddIssue} />
        {this.state.issues.map((issue, i) => {
          return (
            <Issue
              key={i}
              issue={issue}
              //the index (i) is passed in along with binding 'THIS'
              handleDelete={this.handleDelete.bind(this, i)}
            />
          );
        })}
      </div>
    );
  }
}
export default IssueList;
