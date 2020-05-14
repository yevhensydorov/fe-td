import React from "react";
import { removeTodo, editTodo, toggleTodo } from "../Actions/actions";
import { connect } from "react-redux";

let TodoItem = ({ onClick, completed, text, index, dispatch }) => {
  return (
    <>
      <li>
        <input
          name="isCompleted"
          id={text}
          type="checkbox"
          checked={completed}
          onClick={(e) => dispatch(toggleTodo(index))}
        />
        <label for={text}>{text}</label>
        <button onClick={(e) => dispatch(editTodo(index))}>Edit</button>
        <button onClick={(e) => dispatch(removeTodo(index))}>Delete</button>
      </li>
    </>
  );
};

TodoItem = connect()(TodoItem);

export default TodoItem;
