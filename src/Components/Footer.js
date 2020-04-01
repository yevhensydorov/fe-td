import React from 'react'
import VisibleTodoFilterContainer from '../Containers/VisibleTodoFilterContainer';
import { VisibilityFilters } from '../Actions/actions';

const Footer = () => (
    <div>
        <span>Show: </span>
        <VisibleTodoFilterContainer filter={VisibilityFilters.SHOW_ALL}>All</VisibleTodoFilterContainer>
        <VisibleTodoFilterContainer filter={VisibilityFilters.SHOW_COMPLETED}>Completed</VisibleTodoFilterContainer>
    </div>
)

export default Footer