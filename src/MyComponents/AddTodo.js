import React, { useState } from 'react';

export const AddTodo = (props) => {
     const [title, setTitle] = useState("");
     const [desc, setDesc] = useState("");

     const submit = (e)=> {
      e.preventDefault();
      if(!title || !desc){
          alert("title or discription cannot be blank");
      }
      else{
      props.addTodo(title,desc);
      setTitle("");
      setDesc("");
     }
    }

    return (
        <div className= "container">
        <h3 className=" text-center bg-dark text-light" >Add a To-Do-Work</h3>
        <form onSubmit = {submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="Form-label">Work Title</label> 
            <br/>
    <input type="text" value= {title} onChange={(e)=>{setTitle(e.target.value)}} className="Form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="Form-label">Work description</label>
    <br/>
    <input type="text" value= {desc} onChange={(e)=>{setDesc(e.target.value)}}  className="Form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add</button>
  </form>

</div>

    )

    }
