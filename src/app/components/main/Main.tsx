import React from 'react';
import img1 from '../../assets/Frieren-Beyond-Journeys-End-domina-o-MyAnimeList-jpg.webp';
import img2 from '../../assets/Terminator-anime-ganha-primeiro-teaser-pela-Netflix-jpg.jpg';
import img3 from '../../assets/Teaser-da-2a-temporada-de-Mashle-Magic-and-Muscles-1-jpg.webp';
import img4 from '../../assets/Arte-promocional-do-episodio-31-de-Spy×Family-1-jpg.webp';
import img5 from '../../assets/Novo-video-promocional-de-Megumi-no-Daigo-jpg.webp';
import img6 from '../../assets/The-Great-Pretender-anime-projeto-jpg.webp';
import img7 from '../../assets/Whisper-Me-a-Love-Song-tem-seu-1o-video-promocional-divulgado-jpg.webp';
import img8 from '../../assets/Nova-arte-promocional-de-Fluffy-Paradise-1-jpg.webp';
import img10 from '../../assets/Arcane-2a-temporada-ganha-mes-de-estreia-e-teaser-com-Jinx-jpg.webp';
import img11 from '../../assets/2a-Temporada-de-Toilet-bound-Hanako-kun-ja-esta-em-producao-1-jpg.webp';
import img12 from '../../assets/Novo-video-promocional-de-Villainess-Level-99-apresenta-o-personagem-Edwin-Valschein-jpg.webp';
import img13 from '../../assets/anime-original-Nanare-Hananare-jpg.webp';
import img14 from '../../assets/Novo-trailer-do-filme-de-My-Next-Life-as-a-Villainess-traz-a-personagem-Sophia-como-destaque-jpg.webp';
import img15 from '../../assets/3a-Temporada-de-Laid-Back-Camp-ganha-arte-promocional-destacando-a-personagem-Rin-Shima-1-jpg.webp';
import img16 from '../../assets/Sengoku-Youko-tem-sua-data-de-estreia-anunciada-jpg.webp';
import img17 from '../../assets/As-a-Reincarnated-Aristocrat-recebe-seu-2o-video-promocional-1-jpg.webp';
import { Sidebar } from '../sidebar/Sidebar';


interface ISectionPostsProps {
  img: string,
  title: string,
}

const sectionPosts: ISectionPostsProps[] = [
  {
    img: img1,
    title: 'Frieren: Beyond Journey’s End domina o site MyAnimeList',
  },
  {
    img: img2,
    title: 'Terminator – Anime ganha primeiro teaser pela Netflix',
  },
  {
    img: img3,
    title: 'Teaser da 2ª temporada de Mashle: Magic and Muscles',
  },
  {
    img: img4,
    title: 'Arte promocional do episódio 31 de Spy×Family',
  },
  {
    img: img5,
    title: 'Novo vídeo promocional de Megumi no Daigo',
  },
  {
    img: img6,
    title: 'Anime Great Pretender ganha teaser de novo projeto',
  },
  {
    img: img7,
    title: 'Whisper Me a Love Song tem seu 1º vídeo promocional divulgado',
  },
  {
    img: img8,
    title: 'Nova arte promocional de Fluffy Paradise',
  },
  {
    img: img10,
    title: 'Arcane: 2ª temporada ganha mês de estreia e teaser com Jinx',
  },
  {
    img: img11,
    title: '2ª Temporada de Toilet-bound Hanako-kun já está em produção',
  },
  {
    img: img12,
    title: 'Novo vídeo promocional de Villainess Level 99 apresenta o personagem Edwin Valschein',
  },
  {
    img: img13,
    title: 'P.A. Works e DMM revelam anime original Nanare Hananare para 2024',
  },
  {
    img: img14,
    title: 'Novo trailer do filme de ‘My Next Life as a Villainess’ traz a personagem Maria como destaque',
  },
  {
    img: img15,
    title: '3ª Temporada de Laid-Back Camp ganha arte promocional destacando a personagem Rin Shima',
  },
  {
    img: img16,
    title: 'Sengoku Youko tem sua data de estreia anunciada',
  },
  {
    img: img17,
    title: 'As a Reincarnated Aristocrat’ recebe seu 2º vídeo promocional',
  },
];

export const Main = () => {
  return (
    <main className='lg:flex lg:justify-around m-auto mt-14 w-4/5 max-w-[1980px]grid lg:grid-cols-2'>
      <div>
        <section className='grid lg:grid-cols-2 m-auto my-4 lg:m-2 gap-5 max-w-screen-md'>
          {sectionPosts.map((item) => (
            <article key={item.title} className='m-2'>
              <img className='rounded-lg mb-2 cursor-pointer transition hover:scale-105 lg:hover:scale-110 delay-75' 
                src={item.img} 
              />
              <h1 className=' hover:text-gray-400 cursor-pointer'>
                {item.title}
              </h1>
            </article>
          ))}
        </section>
      </div>
      <Sidebar />
    </main>
  );
};