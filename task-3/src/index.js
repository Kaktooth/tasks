import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Palette from './Palette';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/palette/*" element={<Palette />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
