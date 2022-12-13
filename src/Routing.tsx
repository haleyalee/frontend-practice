import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ProductPreviewCardComponent from './challenges/product-preview-card-component-main/ProductPreviewCardComponent';

const routes = [
  { idx: 0, path: "/product-preview-card-component", element: <ProductPreviewCardComponent /> }
];

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {routes.map((r) => 
          <Route key={r.idx} path={r.path} element={r.element} />
        )}
      </Routes>
    </Router>
  )
};

export default Routing;
