import React from 'react';
import TodoItem from './TodoItem';
import NoItemsText from './NoItemsText';
import AddOrEditTodo from './AddOrEditTodo';
import styled from 'styled-components';

const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const TodoList = ({ todos }) => {
    if (!todos || !todos.length) return <NoItemsText />

    return (
        <StyledList>
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
        </StyledList>
    );
}

export default TodoList;