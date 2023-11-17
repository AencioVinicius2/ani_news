import * as React from 'react';
import { Login } from '../pages';
import { Home } from '../pages';
import { Noticias } from '../pages';
import { Sobre } from '../pages';
import { Contato } from '../pages';
import { Layout } from '../components';
import { Routes, Route, Navigate} from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};