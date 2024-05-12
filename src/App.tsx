import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Main } from './components/main/main';
import { Provider } from 'react-redux';
import { appStore } from './store/store';
import { useSelector } from 'react-redux';
import { selectTheme } from './store/theme/selectors';


function App() {

    const {theme} = useSelector(selectTheme)

  return (
      <div className={`app ${theme}`}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='' element='' />
        </Routes>
        <Footer />
      </Router>
    </div>
    

  );
}

export default App;
