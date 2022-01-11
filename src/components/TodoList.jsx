import React, { useState } from 'react';
import Todo from "./Todo";

export default function TodoList({ list, onTodoRemove }) {
  return (
    <div className="flex flex-col justify-start items-center min-h-full w-full p-5">
      <ul className="w-full">
        {
          list.length === 0 ?
            <li>No items to show</li> :
            list.map(
              (element) => <Todo
                key={element.id}
                id={element.id}
                value={element.value}
                onItemRemove={onTodoRemove}/>)
        }
      </ul>
    </div>
  );
}
