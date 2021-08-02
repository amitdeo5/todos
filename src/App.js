
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, { useState } from 'react';


function App() {
  const onDelete = (todo)=> {
    console.log("I am ondelete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    
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
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>

  );
}

export default App;
