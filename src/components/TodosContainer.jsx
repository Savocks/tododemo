import React, { useState } from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodosContainer({ todoList }) {
  const [todos, setTodos] = useState([...todoList]);
  const handlingTodoInsert = (newTodo) => {
    setTodos([{ id: todos.length + 1, value: newTodo }, ...todos])
  }
  const handlingTodoRemove = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }
  return (
    <section className="container w-screen min-h-screen mx-auto p-5 mb-24" >
      <div className="p-5 ring-1 ring-gray-700 rounded-lg min-h-full w-full flex flex-col w-full md:w-3/4 lg:w-2/4 mx-auto">
        <TodoInput onTodoInsert={handlingTodoInsert} />
        <TodoList onTodoRemove={handlingTodoRemove} list={todos} />
      </div>
    </section>
  );
}
