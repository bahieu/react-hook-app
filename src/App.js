import { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import Todo from "./views/Todo";
import Covid from "./views/Covid"

function App() {
  const inputRef = useRef();
  const [job, setJob] = useState(" ");
  const [todos, setTodos] = useState([]);
  const handleOnchange = (e) => {
    setJob(e.target.value);
  };
  const handleSubmit = () => {
    setTodos([...todos, job]);
    setJob(" ");
    inputRef.current.focus();
  };
  const deleteTodo = (index) =>{
    let  newTodos = todos;
    newTodos = newTodos.filter((item,id) =>id !== index)
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Covid data in Vietnam for the last 30 days </h3>
       <Covid />
        {/* <Todo 
        todos={todos}
        deleteTodo = {deleteTodo}
        />
        <input ref={inputRef} value={job} onChange={handleOnchange} />
        <button onClick={handleSubmit}>Add</button> */}
      </header>
    </div>
  );
}

export default App;
