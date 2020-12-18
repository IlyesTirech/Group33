import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {ProductProvider} from './context'
ReactDOM.render(
  <React.StrictMode>
     <ProductProvider>
    <Router>
    <App />
    </Router>
    </ProductProvider>
  </React.StrictMode>,
 
  document.getElementById('root')
);


