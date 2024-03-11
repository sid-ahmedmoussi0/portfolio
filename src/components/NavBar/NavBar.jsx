import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';


const NavBar = () => {
 
  const Links =[
    {name:"Accueil",link:"/a-propos"},
    {name:"Mes Projets",link:"/mes-projet"},
  ];

  const [open,setOpen]=useState(false);
return (
  <div className='shadow-md w-full absolute top-0 left-0 z-20'>
    <div className='md:flex items-center justify-between bg-gray-800 py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-white'>
      <span className='text-3xl mr-1 pt-2'>
      </span>
      Portfolio
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-7 top-5 cursor-pointer md:hidden'>
    <FaBars name={open ? 'close':'menu'}></FaBars>
    </div>

    <ul className={`absolute z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in ${open ? 'top-19 ' : 'top-[-490px]'} backdrop-filter backdrop-blur-sm opacity-${open ? '60' : '100'} lg:pb-0 md:flex md:items-center md:pb-0 md:static md:z-auto md:w-auto md:pl-0 sm:pb-10`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
            <a href={link.link} className='text-white hover:underline duration-500'>{link.name}</a>
          </li>
        ))
      }
    
    </ul>
    </div>
  </div>
)
}


export default NavBar;
