import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value || 0,
    tags: ["Tag A", "Tag B", "Tag C"],
  };

  render() {
    return (
      <div>
        {this.props.children || "Counter"}
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          type="button"
          className="btn btn-secondary btn-sm"
          disabled={this.props.disabled}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id || 0)}
          disabled={this.props.disabled}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
