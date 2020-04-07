import React from 'react';
import AddOrEditTodo from './Components/AddOrEditTodo';
import TodoListContainer from './Containers/TodoListContainer';
import Footer from './Components/Footer';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    align-items: center;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    padding: 1rem;
`;

function App() {
  return (
    <StyledContainer>
      <AddOrEditTodo />
      <TodoListContainer />
      <Footer />
    </StyledContainer>
  );
}

export default App;
