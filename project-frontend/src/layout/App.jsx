import React from 'react';

// Libraries
import {BrowserRouter} from 'react-router-dom';

//Components
import { Header } from '../components/Header';
import Routes from '../routes';
import Footer from '../components/Footer';

// Styles
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
         <header> 
            <Header/>    
         </header>
         <main>
                <Routes/>    
          </main>
           <footer>
                  <Footer/>      
           </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
