import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Product/>} />
        hello
      </Routes>
    </>
  );
};

export default Routing;
