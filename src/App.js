
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import React, { useState } from 'react';


function App() {
  const onDelete = (todo)=> {
    console.log("I am ondelete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    
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
  }


  const [todos, setTodos] = useState([
  {
    sno: 1,
    title: "Go to the market",
    desc: "i need to go to the market to my stationary items"
  },

  {
    sno: 2,
    title: "Go to the mall",
    desc: "i need to go to the mall to meet my friend"
  },

  {
    sno: 3,
    title: "Go to the ghat",
    desc: "i need to go to the ghat with my gf"
  }

]);


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
