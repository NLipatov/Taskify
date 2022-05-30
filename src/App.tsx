import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import TodoList from './Components/TodoList';
import { Todo } from './Model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {todo: todo, isDone: false, id: Date.now()}]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      {/* {todos.map((item)=>{
        return(
          <li>
            {item.todo}
          </li>
        )
      })} */}
    </div>
  );
}

export default App;
