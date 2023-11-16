import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';

export const Header = () => {
  const [links, setLinks] = useState<HTMLElement>();
  const [url, setUrl] = useState('');

  const listenUrl = history;

  useEffect(() => {
    const linksEl = document.querySelector('nav li a') as HTMLElement;
    
    setLinks(linksEl);

    console.log('AAA', links);

    function actualPage() {
      links?.classList.add(style.activePage);
    }

    actualPage();
  });

  useEffect(() => {
    const currentUrl = window.location.href;

    

    setUrl(currentUrl);

    console.log(url);
  }, [url]);

  console.log(window.location.href);




  return (
    <header className='bg-indigo-700 p-12 text-white font-serif text-lg flex justify-center'>
      <nav>
        <ul className='lg:flex'>
          <li className='lg:ml-6 lg:mr-6 hover:bg-white hover:text-black p-1 rounded-sm'>
            <Link to='/'>Home</Link>
          </li>
          <li className='lg:mr-6 hover:bg-white hover:text-black p-1 rounded-sm'>
            <Link to='/noticias'>Noticias</Link>
          </li>  
          <li className='lg:mr-6 hover:bg-white hover:text-black p-1 rounded-sm'>
            <Link to='/sobre'>Sobre</Link>
          </li>
          <li className='lg:mr-6 hover:bg-white hover:text-black p-1 rounded-sm'>
            <Link to='/contato'>Contato</Link>
          </li>
        </ul>  
      </nav>
    </header>
  );
};