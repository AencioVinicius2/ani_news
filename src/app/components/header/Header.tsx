import React from 'react';
import { Link } from 'react-router-dom';

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
    <header className='bg-indigo-700 p-12 text-white font-serif text-lg flex justify-center'>
      <nav>
        <ul className='lg:flex'>  
          {navbar.map((item) => (
            <li  key={item.page} className='lg:ml-6 lg:mr-6 hover:bg-white hover:text-black p-1 rounded-sm'>
              <Link to={item.href}>
                {item.page}
              </Link>
            </li>
          ))}
        </ul>  
      </nav>
    </header>
  );
};