import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/NavBar/NavBar.jsx';
import HeaderAbout from '../../components/HeaderAbout/HeaderAbout.jsx';
import TimelineForm from '../../components/TimelineForm/TimelineForm.jsx';
import Skills from '../../components/Skills/Skills.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export const About = () => {
  return (
    <div className="bg-[#080b14] min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>À propos - Sid-Ahmed Moussi</title>
      </Helmet>
      <NavBar />
      <HeaderAbout />
      <TimelineForm />
      <Skills />
      <Footer />
    </div>
  );
};

export default About;
