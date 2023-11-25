import React, { useEffect, useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { RiCloseCircleFill } from 'react-icons/ri';
import { Nav } from './Nav';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavBar():void {
    setIsOpen(!isOpen);
  }
  
  return (
    <header className='bg-indigo-700 p-6 text-white text-center font-serif text-lg flex flex-col'>
      {!isOpen && 
      <div>
        <div className='lg:hidden w-full h-11 my-2 flex flex-row-reverse hover:cursor-pointer'>
          <button onClick={toggleNavBar}>{isOpen ? <RiCloseCircleFill size={27}/> : <FaAlignJustify />}</button>
        </div>

        <div className='w-full h-0 hidden lg:flex lg:h-auto'>
          < Nav />
        </div>

      </div>
      }

      {isOpen && 
      <div>
        <div className='lg:hidden w-full h-11 flex flex-row-reverse hover:cursor-pointer'>
          <button onClick={toggleNavBar}>{isOpen ? <RiCloseCircleFill size={27}/> : <FaAlignJustify />}</button>
        </div>
        
        <div className='w-full h-auto flex lg:flex lg:h-auto'>
          < Nav />
        </div>
      </div>
      }
  
    </header>
  );
};