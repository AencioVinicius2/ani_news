import React from 'react';

export const Login = () => {
  return (
    <div className='max-w-md w-3/5 m-auto mt-40 text-white shadow-2xl shadow-zinc-900 bg-indigo-700 flex flex-col items-center lg:rounded-3xl rounded-2xl font-serif mb-36'>
      
      <h1 className='lg:mt-12 mt-4 text-3xl hover:text-black hover:cursor-pointer'>Login</h1>

      <form className='w-3/4 flex flex-col m-auto mt-4'>

        <div className='flex flex-col mb-5'>
          <label className='mb-2 hover:cursor-pointer'>E-Mail Address</label>
          <input className='pt-2 pb-2 rounded-lg' type="text" placeholder='Enter E-mail Address'/> 
        </div>

        <div className='flex flex-col mb-5'>
          <label className='mb-2 hover:cursor-pointer'>Password</label>
          <input className='pt-2 pb-2 rounded-lg' type="password" placeholder='Enter Password'/>
        </div>

        <input type="submit" className='bg-white text-black p-2 mt-2 lg:mb-12 mb-4 hover:bg-slate-300 rounded-md text-lg' value='Login'/>

      </form>

    </div>
  );
};