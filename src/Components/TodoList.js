import React from 'react';
import TodoItem from './TodoItem';
import NoItemsText from './NoItemsText';
import AddOrEditTodo from './AddOrEditTodo';

const TodoList = ({ todos }) => {
    if (!todos || !todos.length) return <NoItemsText />

    return (
        <ul>
            {
                todos.map((todo) => {
                    if (todo.editing) {
                        return <AddOrEditTodo
                            isEdit
                            index={todo.index}
                            previousText={todo.text}
                        />
                    } else {
                        return <TodoItem key={todo.index} {...todo}/>
                    }
                })
            }
        </ul>
    );
}

export default TodoList;