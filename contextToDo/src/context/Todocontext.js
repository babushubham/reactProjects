import { createContext,useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id : 1,
            todo: "todo msg",
            completed: false
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id,completed)=>{},
    deleteTodo: (id)=> {},
    toggleComplete: (id)=> {},
    
})


export const useTodo = ()=>{
    // jb v context ka baat krnege to usko ek context dena hoga 
    return useContext(TodoContext)
}


export const Todoptovider = TodoContext.Provider