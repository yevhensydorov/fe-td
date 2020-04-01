import { combineReducers } from 'redux';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    REMOVE_TODO,
    EDIT_TODO,
    UPDATE_TODO,
    VisibilityFilters
} from '../Actions/actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    index: action.index,
                    completed: false,
                    editing: false,
                }
            ];
        case REMOVE_TODO:
            return state.filter(id => {
                return id.index !== action.index
            });
        case EDIT_TODO:
            return state.map(todo => todo.index === action.index ? {...todo, editing:!todo.editing} : todo);
        case UPDATE_TODO:
            return state.map(todo => {
                if(todo.index === action.index) {
                    return {
                        ...todo,
                        text:action.text,
                        editing: !todo.editing
                    }
                } else return todo;
            })
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp