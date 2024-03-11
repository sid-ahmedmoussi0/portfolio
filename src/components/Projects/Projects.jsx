import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectsElements from '../../elements/ProjectsElements/ProjectsElements';

const Projects = () => {

  return (
    <div name="projects" className="text-white w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mes Projets</title>
      </Helmet>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mt-16">
        <div className="pb-8">
          <h1 className='text-center text-4xl font-bold italic text-white mt-8 mb-10 shadow-lg shadow-teal-500'>Mes projets</h1>
        </div>
        <div className="grid gap-8 px-12 mb-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:px-0 ">
          {ProjectsElements.map((element) => (
            <div key={element.id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={element.src} alt="project" className={`rounded-md duration-200 hover:scale-105 ${element.hauteur || ''} lg:h-52 lg:min-w-full md:w-full`} />
              <p className="text-center text-sm font-bold italic shadow-md py-2">{element.title}</p>

              <div className="group relative flex flex-row items-center">
                <p className="py-2 text-sm italic">{element.language}</p>
                <div className="relative">
                  <svg
                    className="w-5 h-5 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="absolute top-2 left-8 flex-col items-center hidden group-hover:flex z-10">
                    <div className="w-15 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg fill="#000000" className="w-17 h-10 -mr-1" viewBox="-860.16 -860.16 2744.32 2744.32" xmlns="http://www.w3.org/2000/svg"><path d="M746 835.28L544.529 723.678c74.88-58.912 95.216-174.688 95.216-239.601v-135.12c0-89.472-118.88-189.12-238.288-189.12-119.376 0-241.408 99.664-241.408 189.12v135.12c0 59.024 24.975 178.433 100.624 239.089L54 835.278S0 859.342 0 889.342v81.088c0 29.84 24.223 54.064 54 54.064h692c29.807 0 54.031-24.224 54.031-54.064v-81.087c0-31.808-54.032-54.064-54.032-54.064zm-9.967 125.215H64.002V903.28c4.592-3.343 11.008-7.216 16.064-9.536 1.503-.688 3.007-1.408 4.431-2.224l206.688-112.096c18.848-10.224 31.344-29.184 33.248-50.528s-7.008-42.256-23.712-55.664c-53.664-43.024-76.656-138.32-76.656-189.152V348.96c0-45.968 86.656-125.12 177.408-125.12 92.432 0 174.288 78.065 174.288 125.12v135.12c0 50.128-15.568 145.84-70.784 189.28a64.098 64.098 0 0 0-24.224 55.664 64.104 64.104 0 0 0 33.12 50.849l201.472 111.6c1.777.975 4.033 2.031 5.905 2.848 4.72 2 10.527 5.343 14.783 8.288v57.887zM969.97 675.936L765.505 564.335c74.88-58.912 98.224-174.688 98.224-239.601v-135.12c0-89.472-121.872-190.128-241.28-190.128-77.6 0-156.943 42.192-203.12 96.225 26.337 1.631 55.377 1.664 80.465 9.664 33.711-26.256 76.368-41.872 122.656-41.872 92.431 0 177.278 79.055 177.278 126.128v135.12c0 50.127-18.56 145.84-73.775 189.28a64.098 64.098 0 0 0-24.224 55.664 64.104 64.104 0 0 0 33.12 50.848l204.465 111.6c1.776.976 4.032 2.032 5.904 2.848 4.72 2 10.527 5.344 14.783 8.288v56.912H830.817c19.504 14.72 25.408 35.776 32.977 64h106.192c29.807 0 54.03-24.224 54.03-54.064V730.03c-.015-31.84-54.047-54.096-54.047-54.096z">
                      </path></svg>
                      <div className="text-black w-4 ml-2">{element.equipe}</div>
                    </div>
                  </div>
                </div>
              </div>
              {element.lien && (
                <div className="flex items-center justify-center">
                  <a href={element.lien} rel='noreferrer' target='_blank'>
                    <button className="px-6 py-3 m-4 duration-200 hover:scale-105">Voir projet</button>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
