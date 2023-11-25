import React from 'react';
import { Form } from '../../components';

export const Contato = () => {
  return (
    <div className='lg:flex grid row-span-2 gap-36 mb-[500px] mt-36 justify-center w-full p-2'>

      <div className='m-auto w-3/4 md:w-2/4 lg:w-auto text-center lg:text-start'>
        <h1 className='mb-8 text-4xl text-indigo-500'>Entre em contato conosco!</h1>
        <p className='text-lg'>Precisa entrar em contato com a gente? Complete o formulario ao lado e nos conte sobre o que você deseja falar!</p>
      </div>

      <Form />

    </div>
  );
};