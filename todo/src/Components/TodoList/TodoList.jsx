import React from "react";
import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = props => {
  let transformedItems = Object.keys(props.items)
    .map(itemKey => {
      return [...Array(props.items[itemKey])].map((_, i) => {
        return <TodoItem key={itemKey + i} type={itemKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log(transformedItems);

  if (transformedItems.length === 0) {
    transformedItems = <p>Please Start Adding Todo Items!</p>;
  }
  return (
    <div className={classes.TodoList}>
      <TodoItem type="todo-top" />
      {transformedItems}
      <TodoItem type="todo-bottom" />
    </div>
  );
};

export default TodoList;
