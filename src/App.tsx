import React, { useState, useReducer } from 'react';
import './App.css';
import InputField from './Components/InputField';
import TodoList from './Components/TodoList';
import { Todo } from './Model';
import { reducer, Actions } from './reducer';




const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoStateFromReducer, dispatch] = useReducer(reducer, [])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({type: 'add', payload: todo})
  };

  const handleRemove = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    dispatch({type: 'remove', payload: id})
  }

  const handleCompletion = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    dispatch({type: 'done', payload: id})
  }

  console.log(todos);

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todoStateFromReducer} handleRemove={handleRemove} handleCompletion={handleCompletion}/>
    </div>
  );
}

export default App;
