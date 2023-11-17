import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  interface INavbarProps {
    page: string,
    href: string,
  }

  const navbar: INavbarProps[] = [
    {
      page: 'Home',
      href: '/'
    },

    {
      page: 'Noticias',
      href: 'noticias'
    },   

    {
      page: 'Sobre',
      href: 'sobre'
    },

    {
      page: 'contato',
      href: 'contato'
    },
  ];

  return (
    <header className='bg-indigo-700 p-12 text-white text-center font-serif text-lg flex justify-center'>
      
      <nav>
        <ul className='lg:flex'>  
          {navbar.map((item) => (
            <li  key={item.page} className='lg:ml-6 lg:mr-2 my-4'>
              <NavLink to={item.href} className={( {isActive} ) => 
                isActive 
                  ? 'bg-white text-black rounded-sm py-2 px-3 transition delay-150' 
                  : ' hover:bg-white hover:text-black rounded-sm py-2 px-3 transition delay-100' }>
                {item.page}
              </NavLink>
            </li>
          ))}
        </ul>  
      </nav>
      
    </header>
  );
};