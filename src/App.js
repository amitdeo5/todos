
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Todoitem} from "./MyComponents/Todoitem";
import {Footer} from "./MyComponents/Footer";

function App() {
  return (
    <>
    <Header tittle = "My Todo List" searchBar = {false} />
    <Todos/>
    <Todoitem/>
    <Footer/>
    </>

  );
}

export default App;
