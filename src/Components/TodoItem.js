import React from 'react';
import { removeTodo, editTodo, toggleTodo } from '../Actions/actions';
import { connect } from 'react-redux'


let TodoItem = ({ onClick, completed, text, index, dispatch }) => {
    return (
        <>
            <li>
                <input
                    name="isCompleted"
                    type="checkbox"
                    checked={completed}
                    onClick={e => dispatch(toggleTodo(index))}
                />
                <span>{text}</span>
                <button
                    onClick={
                        e => dispatch(editTodo(index))
                    }
                >
                    Edit
                </button>
                <button
                    onClick={
                        e => dispatch(removeTodo(index))
                    }
                >
                    Delete
                </button>
            </li>
        </>
    );
}


TodoItem = connect()(TodoItem)

export default TodoItem;