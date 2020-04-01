import React from 'react';
import AddOrEditTodo from './Components/AddOrEditTodo';
import TodoListContainer from './Containers/TodoListContainer';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <AddOrEditTodo />
      <TodoListContainer />
      <Footer />
    </div>
  );
}

export default App;
