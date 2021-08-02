import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            
            <button className="btn btn-sm btn-danger mb-5" onClick={()=>{onDelete(todo)}}>Delete</button>
            <hr/>

        </div>
    )
}

