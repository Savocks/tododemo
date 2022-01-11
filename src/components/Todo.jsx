import React, { useEffect, useRef, useState } from 'react';


export default function Todo({ id, value, onItemRemove }) {
  const [isMounted, setIsMounted] = useState(false);
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) setIsMounted(true);
    else didMount.current = true;
  }, [])

  return (
    <li ref={didMount} className="
      transition-opacity ease-in-out duration-300
      p-2 first:border-t-2 even:border-y-2 border-sky-500 flex items-center
    " style={{ opacity: isMounted ? '1' : '0' }}>
      <span className="mr-auto">{value}</span>
      <button
        className="transition-all ease-in-out duration-300 bg-sky-900 text-white p-1 rounded-md hover:bg-sky-500 hover:p-2"
        onClick={() => onItemRemove(id)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </li>
  )
}
