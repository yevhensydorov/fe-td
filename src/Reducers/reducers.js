import { combineReducers } from "redux";
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  REMOVE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  VisibilityFilters,
} from "../Actions/actions";
import { getTodosFromLocalStorage } from "../helpers/utils";

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = getTodosFromLocalStorage(), action) {
  switch (action.type) {
    case ADD_TODO:
      let updatedState = [
        ...state,
        {
          text: action.text,
          index: action.index,
          completed: false,
          editing: false,
        },
      ];

      localStorage.setItem("todos", JSON.stringify(updatedState));

      return updatedState;
    case REMOVE_TODO:
      let filteredState = state.filter((el) => {
        return el.index !== action.index;
      });

      localStorage.setItem("todos", JSON.stringify(filteredState));

      return filteredState;
    case EDIT_TODO:
      let isEditTodo = state.map((todo) =>
        todo.index === action.index ? { ...todo, editing: !todo.editing } : todo
      );

      localStorage.setItem("todos", JSON.stringify(isEditTodo));

      return isEditTodo;
    case UPDATE_TODO:
      let updatedTodo = state.map((todo) => {
        if (todo.index === action.index) {
          return {
            ...todo,
            text: action.text,
            editing: !todo.editing,
          };
        } else return todo;
      });

      localStorage.setItem("todos", JSON.stringify(updatedTodo));

      return updatedTodo;
    case TOGGLE_TODO:
      let isToggleTodo = state.map((todo) => {
        if (todo.index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });

      localStorage.setItem("todos", JSON.stringify(isToggleTodo));

      return isToggleTodo;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
