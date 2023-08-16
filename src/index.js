// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './css/main.css'
import App from './App'
import Header from './components/Header';
import Footer from './components/Footer';

const page = (<div className='page'>
  <BrowserRouter>
    <Header />
    <div className='page_content'>
      <div className='container'>
        <App />
      </div>
    </div>
    <Footer />
  </BrowserRouter>
</div>)
const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(page);
