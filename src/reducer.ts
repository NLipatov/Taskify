import { Todo } from "./Model";

export type Actions = 
| {type: "add"; payload: string}
| {type: "remove"; payload: number}
| {type: "done"; payload: number}
| {type: "edit", payload: {id: number, name: string}}


export const reducer = (state: Todo[], action: Actions) => {
    switch (action.type){
        case "add":
            return[
                ...state,
                {id: Date.now(), todo: action.payload, isDone: false}
            ];
        case "remove":
            return state.filter(x=>x.id !== action.payload);
        case "done":
            return state.map((todo) => 
            todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo);
        case "edit":
            return state.map((todo) =>
            todo.id === action.payload.id ? {...todo, name: action.payload.name} : todo)
        default:
            return state;
    }
}