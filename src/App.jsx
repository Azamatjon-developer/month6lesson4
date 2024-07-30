import React from 'react';
import { TodoContext } from './Context/Context';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import "./App.css";   
function App() {
  return (
    <TodoContext>
      <TodoForm />
      <TodoList />
    </TodoContext>
  );
}

export default App;
