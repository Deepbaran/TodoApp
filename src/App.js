import React, { useReducer, useEffect, useContext } from 'react';
import { ADD_TODO } from './context/action.types';
import { Container } from 'reactstrap';
import { TodoContext } from './context/TodoContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TodoReducer from './context/reducer';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    if (localTodos) {
      localTodos.map(item =>
        dispatch({
          type: ADD_TODO,
          payload: item
        })
      );
    }
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch
      }}
    >
      <Container fluid>
        <h1>Todo App</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
