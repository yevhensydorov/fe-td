import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions/actions';
import { updateTodo } from '../Actions/actions';

let AddOrEditTodo = ({ dispatch, isEdit, index, previousText }) => {
    const [todo, setTodo] = useState(previousText ? previousText : '');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!todo.trim()) {
            return
        }
        dispatch(isEdit ? updateTodo(todo, index) : addTodo(todo))
        setTodo('');
    }

    return (
        <form
            onSubmit={onSubmit}
        >
            <button type="submit">+</button>
            <label htmlFor="todo">{isEdit ? 'Edit To-do' : 'Add To-do'}</label>
            <input
                type="text"
                name="todo"
                id="todo"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
        </form>
    )
}

AddOrEditTodo = connect()(AddOrEditTodo)

export default AddOrEditTodo