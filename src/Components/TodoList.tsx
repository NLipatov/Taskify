import React from 'react';
import { Todo } from '../Model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
    todos: Todo[],
    handleRemove: (e: React.FormEvent, id: number) => void,
    handleCompletion: (e: React.FormEvent, id: number) => void
}

const TodoList: React.FC<Props> = ({todos, handleRemove, handleCompletion}) => {
    return(
        <div className="todos">
            {todos.map((todo) => (
                <SingleTodo
                    handleCompletion={handleCompletion}
                    handleRemove={handleRemove}
                    todo={todo}
                    todos={todos}
                    key={todo.id}/>
            ))}
        </div>
    )
}

export default TodoList;