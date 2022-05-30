import React from 'react';
import { Todo } from '../Model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return(
        <div className="todos">
            {todos.map((todo) => (
                <SingleTodo
                    setTodos={setTodos}
                    todo={todo}
                    todos={todos}
                    key={todo.id}/>
            ))}
        </div>
    )
}

export default TodoList;