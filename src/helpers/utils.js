export const getTodosFromLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));

  if (!todos || todos.length < 1) return [];
  else return todos;
};

export const getLatestIdFromLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));

  if (!todos || todos.length < 1) return 1;
  else return todos[todos.length - 1].index;
};
