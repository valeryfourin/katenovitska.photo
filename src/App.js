// import React, { useEffect } from 'react';
// import logo from './logo.jpg';
import './App.css';
import AppRouter from './components/AppRouter';
import {BrowserRouter} from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import Preloader from './components/Preloader';


const App = () => {

  return (
    <>
    <BrowserRouter>
      {/* <Preloader /> */}
      <NavMenu />
      <AppRouter />
      <Footer />
    </BrowserRouter>
    </>
  );
};

export default App; 


