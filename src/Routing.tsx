import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ProductPreviewCardComponent from './challenges/product-preview-card-component-main/product-preview-card-component-main/ProductPreviewCardComponent';

const routes = [
  { path: "/product-preview-card-component", element: <ProductPreviewCardComponent /> },
  { path: "/random", element: <ProductPreviewCardComponent /> },
];

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {routes.map((r, idx) => 
          <Route key={idx} path={r.path} element={r.element} />
        )}
      </Routes>
    </Router>
  )
};

export default Routing;
