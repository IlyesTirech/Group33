import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav'
import UnderNav from './components/UnderNav'
import SliderCom from './components/SliderCom'
import Footer from './components/Footer';
import UnderFooter from './components/UnderFooter'
import Slider from 'react-slick';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Nav />
    <UnderNav/>
   
   <Footer/>
  <UnderFooter/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
