import './App.css';
import Hero from "./components/Hero";
import { useState } from "react";
import Footer from "./components/Footer";
import TodosContainer from "./components/TodosContainer";


function App() {
  const [ todos, setTodos ] = useState([])
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    if (inputValue) {
      setTodos([{id: todos.length+1, todo: inputValue}, ...todos])
      setInputValue('');
    }
  }

  return (
    <>
      <Hero />
      <TodosContainer todoList={[]}/>
      <Footer />
    </>

  );
}

export default App;
