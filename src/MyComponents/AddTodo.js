import React, { useState } from 'react';

export const AddTodo = (props) => {
     const [title, setTitle] = useState("");
     const [desc, setDesc] = useState("");

     const submit = (e)=> {
      e.preventDefault();
      if(!title || !desc){
          alert("title or discription cannot be blank");
      }
      props.addTodo(title,desc);
     }


    return (
        <div className= "container" my-3>
        <h3>Add a to-do-work</h3>
        <form onSubmit = {submit}>
  <div className="mb-3">
    <label htmlhtmlFor="exampleInputEmail1" className="Form-label">to-do Work title</label>
    <input type="text" value= {title} onChange={(e)=>{setTitle(e.target.value)}} className="Form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="Form-label">to-do-work description</label>
    <input type="text" value= {desc} onChange={(e)=>{setDesc(e.target.value)}}  className="Form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add</button>
  </form>

</div>

    )
}