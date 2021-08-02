import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minhight:"70vh"
    
    }
    return (
        <div className= "container my-2 " style={myStyle}>
        <h3 className="text-center my-3 bg-dark text-light">To-do-Work List</h3>
        {props.todos.length===0? "huraay !! You have completed your all pending works !!" :
        props.todos.map((todo)=>{
           return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })
        }
            
        </div>
        
    )
}
