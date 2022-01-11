import React, { useState } from 'react';

export default function TodoInput({ onTodoInsert }) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = () => {
    onTodoInsert(inputValue);
    setInputValue('');
  }

  return (
    <div className="flex mx-auto w-full">
      <input
        type="text"
        id="todoForm"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="px-2 py-3 w-full bg-gray-200"
        placeholder="Insert todo here"/>
      <button className="px-2 py-3 bg-sky-800 text-white transition-colors ease-in-out duration-300
            hover:bg-sky-500" onClick={() => handleInputChange()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>

  );
}
