import React from 'react';
import img1 from '../../assets/mangas-img/manga-1.webp';
import img2 from '../../assets/mangas-img/manga-2.webp';
import img3 from '../../assets/mangas-img/manga-3.webp';
import img4 from '../../assets/mangas-img/manga-4.jpg';
import img5 from '../../assets/mangas-img/manga-5.webp';
import img6 from '../../assets/mangas-img/manga-6.webp';
import img7 from '../../assets/mangas-img/manga-7.webp';

interface IPostItemsProps {
  img: string,
  title: string,
  alt: string,
}

const postItems: IPostItemsProps[] = [
  {
    img: img1,
    title: 'Mangá “A Condition Called Love” entra no arco final',
    alt: '',
  },
  {
    img: img2,
    title: 'Mangá The Ichinose Family’s Deadly Sins está finalizado',
    alt: '',
  },
  {
    img: img3,
    title: 'Ranking: 10 mangás mais vendidos no Japão em outubro de 2023',
    alt: '',
  },
  {
    img: img4,
    title: 'Mangá Yofukashi no Uta entra em último arco no 18º volume',
    alt: '',
  },
  {
    img: img5,
    title: 'Noragami: Mangá encerra sua jornada e deixa fãs órfãos',
    alt: '',
  },
  {
    img: img6,
    title: 'Chihayafuru: Mangá tem sequência anunciada',
    alt: '',
  },
  {
    img: img7,
    title: 'Mangá de Vampire Dormitory será adaptado para anime em 2024',
    alt: '',
  },


];

export const Sidebar = () => {
  return (
    <div className='lg:w-1/3 w-4/5 m-auto lg:m-2 my-4 p-2 flex justify-center border-solid'>
      
      <ul className='p-2 text-center'>

        <h1 className='smy-4 text-3xl'>Mangas</h1>

        {postItems.map((item) => (
          <li key={item.title} className='my-8 flex lg:flex-row flex-col items-center justify-center'>
            <img className='lg:w-36 w-3/5 rounded-lg cursor-pointer transition hover:scale-105 lg:hover:scale-110 delay-75' 
              src={item.img} alt={item.alt} 
            />
            <p className='lg:w-80 w-3/5 md:w-2/4 text-center lg:text-start my-2 mx-4 hover:text-gray-400 cursor-pointer'>
              {item.title}
            </p>
          </li>
        ))}

      </ul>
    </div>
  );
};