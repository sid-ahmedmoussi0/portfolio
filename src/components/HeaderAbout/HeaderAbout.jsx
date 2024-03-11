import React from 'react';
import IMG from '../../assets/Profil/Profil.jpg';
import Typewriter from 'typewriter-effect';
import CVButton from '../CVButton/CVButton';


const HeaderAbout = () => {
  return (
    <section className=' top-[7rem]  flex items-center relative' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-32'>
          <div className='flex-1 text-center font-secondary lg:text-left-[110px] ' >
            <h1 className='font-bold leading-[1.8] text-[25px] text-left text-white lg:text-[45px] lg:ml-8'>
              <span>Bonjour, je suis</span>
            </h1>
            <div className='mb-6 text-[23px] font-semibold uppercase leading-[1] text-left font-secondary text-teal-500 italic lg:text-[60px] lg:ml-8 '>
              <Typewriter
                options={{
                  strings: [
                    'Développeur Full Stack',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
            <p className=' mb-8 mx-auto text-white text-justify	 lg:ml-8'>
              Je m'appelle Sid-Ahmed Moussi, passionné par l'informatique et plus particulièrement par le développement d'applications et de sites web. Grâce à mes formations, mes expériences professionnelles et mes projets personnels, j'ai pu
              acquérir un certains nombre de compétences qui m'ont permis aujourd'hui d'avoir un bon niveau en programmation. Actuellement en quête de nouvelles opportunités, je suis animé par le désir constant d'apprendre et de mettre en pratique mes connaissances.  
             
            </p>
            <div className='flex max- gap-x-6 items-center lg:mx-8 '>
              <CVButton />
            </div>
          </div>
          <div className='hidden flex-1 max-w-[485px] lg:flex lg:ml-12 lg:p-1 lg:h-96'>
            <img src={IMG} alt='profil' className='border-white rounded-lg' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderAbout;
