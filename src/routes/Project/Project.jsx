import React from 'react'
import NavBar from "../../components/NavBar/NavBar.jsx";
import  Projects  from '../../components/Projects/Projects';
import Footer  from '../../components/Footer/Footer.jsx';

export const Project = () => {
  return (
<div className='bg-[#1d1d1d]'>
    <div><NavBar /></div> 
    <div><Projects /></div>
    <div><Footer /></div>
    </div>
  )
}

export default Project;