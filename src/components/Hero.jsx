import React from 'react';
import HeroImage from '../assets/images/Hero.jpg';
import Navbar from "./Navbar";

export default function Hero(props) {
  return (
    <section className="bg-cover bg-fixed bg-top bg-size w-full h-screen" style={{
      backgroundImage: `url(${HeroImage})`
    }}>
      <Navbar />
      <div className="flex flex-col items-center p-5 h-full w-full">
        <div className="
          drop-shadow-2xl
          h-full
          bg-white
          p-5 mt-10
          rounded-lg flex flex-col justify-center
          md:w-3/4
          md:mx-auto
          ">
          <h1 className="text-5xl mx-auto w-auto my-5">
            Another Todos app!
          </h1>
          <button className="
          transition-all ease-in-out duration-300
          hover:p-6 hover:bg-sky-500 hover:w-56
          bg-sky-900 rounded-lg active:bg-sky-500 text-white w-full md:w-44 mx-auto p-5">
            <a href="#todoForm">
              Insert a new todo!
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
