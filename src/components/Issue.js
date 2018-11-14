import React from "react";

class Issue extends React.Component {
  render() {
    const { issue, handleDelete } = this.props;
    return (
      <div>
        <p>
          {issue} <button onClick={handleDelete}>x</button>
        </p>
      </div>
    );
  }
}
export default Issue;
