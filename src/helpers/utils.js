export const getTodosFromLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (!todos) return [];
    else return todos;
}