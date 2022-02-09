import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0, disabled: false },
      { id: 2, value: 5, disabled: false },
      { id: 3, value: 100, disabled: false },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );

    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            id={counter.id}
            key={counter.id}
            value={counter.value}
            disabled={counter.disabled}
            onDelete={this.handleDelete}
          >
            <b>Counter #{counter.id}</b>
          </Counter>
        ))}
        <Counter disabled>Disabled Counter</Counter>
      </div>
    );
  }
}

export default Counters;
