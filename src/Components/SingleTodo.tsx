import React, { useEffect, useRef, useState, useReducer } from 'react';
import { Todo } from '../Model';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import './styles.css';

type Props = {
    todo: Todo,
    todos: Todo[],
    handleRemove: (e: React.FormEvent, id: number) => void,
    handleCompletion: (e: React.FormEvent, id: number) => void
}

const SingleTodo:React.FC<Props> = ({todo, todos, handleRemove, handleCompletion}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    const handleDone = (e: React.FormEvent, id: number) =>{
        handleCompletion(e, id);
        // setTodos(
        //     todos.map((todo)=>
        //     todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
        // )
    };

    const handleDelete = (e: React.FormEvent, id: number) =>{
        handleRemove(e, id);
    };

    const handleEdit = (e:React.FormEvent, id: number) => {
        e.preventDefault();
        // setTodos(
        //     todos.map(todo =>
        //         todo.id === id ? {...todo, todo: editTodo} : todo
        //     )
        // )
        // setEdit(false);
    };

    return(
        <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>
            {
                edit ? (
                    <input ref={inputRef}
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                        className="todos__single--text"/>
                ):
                (
                    todo.isDone? (
                        <s className='todos__single--text'>
                            {todo.todo}
                        </s>
                    )
                    :
                    (
                        <span className='todos__single--text'>
                            {todo.todo}
                        </span>
                    )
                )
            }


            <div>
                <span className='icon' onClick={() => {
                    if (!edit && !todo.isDone){
                        setEdit(!edit);
                    }
                }}>
                    <AiFillEdit/>
                </span>
                <span className='icon' onClick={(e) => handleDelete(e, todo.id)}>
                    <AiFillDelete/>
                </span>
                <span className='icon' onClick={(e) => handleDone(e, todo.id)}>
                    <MdDone/>
                </span>
            </div>

        </form>
    )
}

export default SingleTodo;