import React, { Component } from "react";
import TodoList from "../../Components/TodoList/TodoList";
import BuildControls from "../../Components/TodoList/BuildControls/BuildControls";

class TodoBuilder extends Component {
  state = {
    items: {
      Exercise: 1,
      Baking: 1,
      Reading: 1,
      Website: 2,
      ReactStudy: 2
    }
  };

  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <BuildControls />
      </div>
    );
  }
}

export default TodoBuilder;
