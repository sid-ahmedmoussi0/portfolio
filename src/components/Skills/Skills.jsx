import React from 'react';
import LangageProgElements from '../../elements/SkillsElement/LangagesProgElements';
import BddElements from '../../elements/SkillsElement/BddElements';
import FrameworkElements from '../../elements/SkillsElement/FrameworkElements';
import OutilsElements from '../../elements/SkillsElement/OutilsElements';
import CmsElements from '../../elements/SkillsElement/CmsElements';

const Skills = () => {
  return (
    <div name='skills' className=" w-full ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <h1 className='text-center text-4xl font-bold italic text-white mt-8 mb-10 shadow-lg  shadow-teal-500'>Compétences Informatiques</h1>

        {/* Langage de Programmation */}
        <div>
          <p className="text-2xl font-bold border-b-4 border-gray-500 p-2 inline lg:text-4xl">Langages de programmation</p>
        </div>
        <div className="w-full grid gap-8 text-center py-8 px-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:px-0">
          {LangageProgElements.map((element) => (
            <div key={element.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${element.style} `}>
              <img src={element.path} alt={element.title} className="mx-auto h-20" />
              <p className="mt-0 flex flex-col items-center">{element.title}</p>
            </div>
          ))}
        </div>

        {/* Bases de données */}
        <div className="mt-7">
          <p className="text-2xl font-bold border-b-4 border-gray-500 p-2 inline lg:text-4xl">Bases de données</p>
        </div>
        <div className="w-full grid gap-8 text-center py-8 px-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:px-0">
          {BddElements.map((element) => (
            <div key={element.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${element.style}`}>
              <img src={element.path} alt={element.title} className="mx-auto h-20" />
              <p className="mt-2">{element.title}</p>
            </div>
          ))}
        </div>

        {/* Frameworks */}
        <div className="mt-7">
          <p className="text-2xl font-bold border-b-4 border-gray-500 p-2 inline lg:text-4xl">Frameworks</p>
        </div>
        <div className="w-full grid gap-8 text-center py-8 px-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:px-0">
          {FrameworkElements.map((element) => (
            <div key={element.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${element.style}`}>
              <img src={element.path} alt={element.title} className="mx-auto h-20" />
              <p className="mt-2">{element.title}</p>
            </div>
          ))}
        </div>

        {/* Outils */}
        <div className="mt-7">
          <p className="text-2xl font-bold border-b-4 border-gray-500 p-2 inline lg:text-4xl">Outils</p>
        </div>
        <div className="w-full grid gap-8 text-center py-8 px-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:px-0">
          {OutilsElements.map((element) => (
            <div key={element.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${element.style}`}>
              <img src={element.path} alt={element.title} className="mx-auto h-20" />
              <p className="mt-2">{element.title}</p>
            </div>
          ))}
        </div>

        {/* CMS */}
        <div className="mt-7">
          <p className="text-2xl font-bold border-b-4 border-gray-500 p-2 inline lg:text-4xl">CMS</p>
        </div>
        <div className="w-full grid gap-8 text-center py-12 px-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:px-0">
          {CmsElements.map((element) => (
            <div key={element.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${element.style}`}>
              <img src={element.path} alt={element.title} className="mx-auto h-20" />
              <p className="mt-2">{element.title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>



  );
}

export default Skills;
