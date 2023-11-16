import React from 'react';
import img1 from '../../assets/mangas-img/manga-1.webp';
import img2 from '../../assets/mangas-img/manga-2.webp';
import img3 from '../../assets/mangas-img/manga-3.webp';
import img4 from '../../assets/mangas-img/manga-4.jpg';
import img5 from '../../assets/mangas-img/manga-5.webp';
import img6 from '../../assets/mangas-img/manga-6.webp';
import img7 from '../../assets/mangas-img/manga-7.webp';

export const Sidebar = () => {
  return (
    <div className='lg:w-1/3 w-4/5 m-auto lg:m-2 my-4 p-2 flex justify-center border-solid'>
      
      <ul className='p-2 text-center'>

        <h1 className='smy-4 text-3xl'>Mangas</h1>

        <li className='my-8 flex lg:flex-row flex-col items-center justify-center'>
          <img className='lg:w-36 w-3/5 rounded-lg cursor-pointer transition hover:scale-105 lg:hover:scale-110 delay-75' 
            src={img1} alt="" 
          />
          <p className='lg:w-80 w-full md:w-2/4 text-center lg:text-start my-2 mx-4 hover:text-gray-400 cursor-pointer'>
          Mangá “A Condition Called Love” entra no arco final
          </p>
        </li>

        <li className='my-8 flex lg:flex-row flex-col items-center justify-center'>
          <img 
            className='lg:w-36 w-3/5 rounded-lg cursor-pointer transition hover:scale-105 lg:hover:scale-110 delay-75' 
            src={img2} alt="" 
          />
          <p className='lg:w-80 w-full md:w-2/4 text-center lg:text-start my-2 mx-4 hover:text-gray-400 cursor-pointer'>
            Mangá The Ichinose Family’s Deadly Sins está finalizado
          </p>
        </li>

        <li className='my-8 flex lg:flex-row flex-col items-center justify-center'>
          <img className='lg:w-36 w-3/5 rounded-lg cursor-pointer transition hover:scale-105 lg:hover:scale-110 delay-75' src={img3} alt="" />
          <p className='lg:w-80 w-full md:w-2/4 text-center lg:text-start my-2 mx-4 hover:text-gray-400 cursor-pointer'>
            Mangá “A Condition Called Love” entra no arco final
          </p>
        </li>

        <li className='my-8 flex lg:flex-row flex-col items-center justify-center'>
          <img className='lg:w-36 w-3/5 rounded-lg cursor-pointer transition hover:scale-105 lg:hover:scale-110 delay-75' src={img4} alt="" />
          <p className='lg:w-80 w-full md:w-2/4 text-center lg:text-start my-2 mx-4 hover:text-gray-400 cursor-pointer'>
            Mangá Yofukashi no Uta entra em último arco no 18º volume
          </p>
        </li>

        <li className='my-8 flex lg:flex-row flex-col items-center justify-center'>
          <img className='lg:w-36 w-3/5 rounded-lg cursor-pointer transition hover:scale-105 lg:hover:scale-110 delay-75' src={img5} alt="" />
          <p className='lg:w-80 w-full md:w-2/4 text-center lg:text-start my-2 mx-4 hover:text-gray-400 cursor-pointer'>
            Noragami: Mangá encerra sua jornada e deixa fãs órfãos
          </p>
        </li>

        <li className='my-8 flex lg:flex-row flex-col items-center justify-center'>
          <img className='lg:w-36 w-3/5 rounded-lg cursor-pointer transition hover:scale-105 lg:hover:scale-110 delay-75' src={img6} alt="" />
          <p className='lg:w-80 w-full md:w-2/4 text-center lg:text-start my-2 mx-4 hover:text-gray-400 cursor-pointer'>
            Chihayafuru: Mangá tem sequência anunciada
          </p>
        </li>

        <li className='my-8 flex lg:flex-row flex-col items-center justify-center'>
          <img className='lg:w-36 w-3/5 rounded-lg cursor-pointer transition hover:scale-105 lg:hover:scale-110 delay-75' src={img7} alt="" />
          <p className='lg:w-80 w-full md:w-2/4 text-center lg:text-start my-2 mx-4 hover:text-gray-400 cursor-pointer'>
            Mangá de Vampire Dormitory será adaptado para anime em 2024
          </p>
        </li>

      </ul>
    </div>
  );
};