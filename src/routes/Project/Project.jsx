import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer.jsx';

export const Project = () => {
  return (
    <div className="bg-[#080b14] min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mes Projets - Sid-Ahmed Moussi</title>
      </Helmet>
      <NavBar />
      <Projects />
      <Footer />
    </div>
  );
};

export default Project;
