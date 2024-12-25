import { useState,useEffect } from "react"
import { Todoptovider,TodoContext,useTodo } from "./context"
import TodoForm from "./component/TodoForm"
import TodoItem from "./component/TodoItems"


function App() {
 const [todos,setTodos]=useState([])

 useEffect(() => {
   
const todos= JSON.parse(localStorage.getItem("todos"))
   
if(todos && todos.length>0){
  setTodos(todos)
}
 }, [])
 
 useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos))

 }, [todos])
 

const addTodo = (todo)=> {
  setTodos((prev)=> [{id:Date.now(), ...todo}, ...prev])
  console.log('yes')
}

const updateTodo = (id,todo)=> {
  setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id === id ? todo: prevtodo)))

}

const toggleComplete = (id)=> {
  setTodos((prev)=> prev.map((prevtodo)=> prevtodo.id ===id ? {...prevtodo, completed:!prevtodo.completed} : prevtodo  ))
  console.log("yes sir")
}

const deleteTodo = (id)=> {
  setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
}
  return (
    <Todoptovider value={{todos,addTodo,deleteTodo,toggleComplete,updateTodo}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                          <div key={todo.id} className="w-full">
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoptovider>
  )
}

export default App