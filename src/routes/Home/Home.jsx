import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import '../../index.css';
import bg from '../../assets/img/bg.jpg';


function Home() {
  return (
    <div
      className="font-serif text-white font-bold text-5xl text-center flex flex-col justify-center items-center min-h-screen relative"
      style={{
        backgroundImage: `url(${bg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
       <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Portfolio</title>
      </Helmet>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-75"></div>
     
      <div className="relative z-10">
        <Typewriter
          options={{
            strings: [
              'Bienvenue sur mon Portfolio',
              'vous y découvrirez mes projets',
              'ainsi que mes compétences',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
        <Link to="/a-propos">
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            En savoir plus
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
