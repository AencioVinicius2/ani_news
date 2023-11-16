import React from 'react';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';
export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};


