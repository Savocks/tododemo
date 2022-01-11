import React, { useEffect, useRef, useState } from 'react';

export default function Navbar(props) {
  const navbarRef = useRef();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handlingFixedEffect = (event) => {
      if (window.scrollY === navbarRef.current.offsetTop) {
        setIsSticky(false)
      }
      if (window.scrollY > navbarRef.current.offsetTop)
        setIsSticky(true);
    }
    window.addEventListener('scroll', handlingFixedEffect);
    return () => window.removeEventListener('scroll', handlingFixedEffect);
  }, []);

  return (
      <header
        ref={navbarRef}
        className={`
          p-2 transition-all duration-300 w-full z-10 flex flex-row items-center
           ${isSticky ? 'bg-black' : 'bg-black/50' } text-white 
           ${isSticky ? 'h-24' : 'h-16 '}
           `
        } style={{
          position: isSticky ? 'fixed' : 'relative'
        }}>
        <svg xmlns="http://www.w3.org/2000/svg"
             className="h-12 w-12 flex-initial text-sky-900" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
        <div className="ml-auto mr-2 flex flex-row items-center">
          <a href="#" className="transition-all ease-in-out duration-300 bg-sky-900 px-4 py-2 mx-2 rounded-md hover:bg-sky-500 hover:px-5 hover:py-3">
            About the App
          </a>
          <a href="#" className="transition-all ease-in-out duration-300 bg-sky-900 px-4 py-2 mx-2 rounded-md hover:bg-sky-500 hover:px-5 hover:py-3">
            About me
          </a>
        </div>
      </header>
  );
}
