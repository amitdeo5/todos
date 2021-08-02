
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo)=> {
    console.log("I am ondelete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("i'm adding this todo", title, desc)

    if(todos.length==0){
      sno=0;
    }
    let sno = todos[todos.length-1].sno + 1;

    const myTodo = {
      sno : sno,
      title:title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    if( localStorage.getItem("todos")){
      localStorage.setItem("todos", JSON.stringify(todos));
    };
  }


  const [todos, setTodos] = useState([initTodo]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
     }, [todos])


  return (
    <>
    <Header tittle = "My Todo List" searchBar = {false} />
    <AddTodo addTodo={addTodo} />
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>

  );
}

export default App;
