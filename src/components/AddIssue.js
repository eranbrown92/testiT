import React from "react";

export default class AddIssue extends React.Component {
  constructor() {
    super();
    this.state = {
      issues: [],
      value: ""
    };
  }
  onSubmit = e => {
    //prevent form from submitting
    e.preventDefault();
  };
  onChange = e => {
    //set the value in state when the form gets input/changes
    this.setState({ value: e.target.value });
  };
  onClick = () => {
    //capture user input in a variable
    const userInput = document.getElementById("userInput").value;
    // if the userinput is empty, show an error msg
    if (userInput.trim() === "") {
      alert("Name is required");
      // otherwise
    } else {
      //call the handleAddIssue f(x) from the issueList component
      this.props.handleAddIssue(this.state.value);
      //set the input in the form to an empty string
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Description: </label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="Describe the task"
              id="userInput"
            />
            <button
              className="btn waves-effect waves-light blue"
              onClick={this.onClick}
            >
              Add Issue
            </button>
          </div>
        </form>
      </div>
    );
  }
}
