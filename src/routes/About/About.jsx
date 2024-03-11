import React from 'react'
import { Helmet } from 'react-helmet';
import NavBar from "../../components/NavBar/NavBar.jsx";
import HeaderAbout from "../../components/HeaderAbout/HeaderAbout.jsx";
import TimelineForm from '../../components/TimelineForm/TimelineForm.jsx';
import Skills from '../../components/Skills/Skills.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export const About = () => {
  return (

    <div className='bg-[#1d1d1d]'>
      <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>A propos</title>
      </Helmet>
      <div><NavBar /></div>
      <div><HeaderAbout /></div>
      <div className='mt-[6rem]'><TimelineForm /></div>
      <div><Skills /></div>
      <div><Footer /></div>
    </div>
  )
}

export default About;