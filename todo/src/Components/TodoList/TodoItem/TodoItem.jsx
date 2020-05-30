import React, { Component } from "react";
import classes from "./TodoItem.module.css";
import PropTypes from "prop-types";

class TodoItem extends Component {
  render() {
    let items = null;

    switch (this.props.type) {
      case "todo-top":
        items = <div className={classes.TodoTop}></div>;
        break;
      case "todo-bottom":
        items = <div className={classes.TodoBottom}></div>;
        break;
      case "Exercise":
        items = (
          <div className={classes.Exercise}>
            <h3>{this.props.type}</h3>
          </div>
        );
        break;
      case "Baking":
        items = (
          <div className={classes.Baking}>
            <h3>{this.props.type}</h3>
          </div>
        );
        break;
      case "Reading":
        items = (
          <div className={classes.Reading}>
            <h3>{this.props.type}</h3>
          </div>
        );
        break;
      case "ReactStudy":
        items = (
          <div className={classes.ReactStudy}>
            <h3>{this.props.type}</h3>
          </div>
        );
        break;
      case "Website":
        items = (
          <div className={classes.Website}>
            <h3>{this.props.type}</h3>
          </div>
        );
        break;
      default:
        items = null;
    }
    return items;
  }
}

TodoItem.propTypes = {
  type: PropTypes.string.isRequired
};

export default TodoItem;
