import React, { useEffect, useState } from 'react';
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
import { LoadingPage } from './loadingPage/loadPage';


function App() {

    const {theme} = useSelector(selectTheme)
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingPage/> : <Main/>}
    </div>
    //   <div className={`app ${theme}`}>
    //   <Router>
    //     <Header />
    //     <Routes>
    //       <Route path='/' element={<Main/>} />
    //       <Route path='' element='' />
    //     </Routes>
    //     <Footer />
    //   </Router>
    // </div>
    

  );
}

export default App;
