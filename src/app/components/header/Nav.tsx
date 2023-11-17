import React from 'react';
import { NavLink } from 'react-router-dom';


export const Nav = () => {

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
      <nav className=' justify-center border-solid m-auto'>
        <ul className='lg:flex justify-center'>   
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
    );
};