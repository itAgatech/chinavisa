import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './main';
import "./css/style.css"
import "./font/Montserrat/stylesheet.css"
import Header from './block/header';
import Footer from './block/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Header/>
    <Main/>
    </>
  </React.StrictMode>
);


