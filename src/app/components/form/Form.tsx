import React from 'react';
import { Input } from '../input/Input';

export const Form = () => {
  return (
    <form className='flex flex-col p-7 lg:w-[500px] w-[360px] m-auto bg-neutral-800 shadow-2xl rounded-md'>

      <div className='flex w-full'>
        <div className='flex flex-col w-2/4'>
          <label className='text-xl mr-2 hover:text-gray-400 cursor-pointer'>Primeiro nome*</label> 
          <Input type='text' className='mr-2 p-2 rounded-sm' />
        </div>

        <div className='flex flex-col w-2/4'>
          <label className='text-xl border-solid hover:text-gray-400 cursor-pointer'>Segundo nome</label>
          <Input type='text' className='p-2 rounded-sm' />
        </div>
      </div>

      <label className='mt-4 text-xl hover:text-gray-400 cursor-pointer'>Email*</label>
      <Input type='text' className='w-full p-2' />

      <label className='mt-4 text-xl hover:text-gray-400 cursor-pointer'>Em que podemos te ajudar?</label>
      <textarea rows={4}></textarea>
    </form>
  );
};