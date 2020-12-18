import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/LandingPage/Nav'
import LandingPage from './components/LandingPage/LandingPage'
import Mens from './components/Mens'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Modal from './components/Modal'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <React.Fragment>
<Nav/>
<Switch>
  <Route path='/' exact component={LandingPage}/>
  <Route path='/mens' component={Mens}/>
  <Route path='/details' component={Details}/>
  <Route path='/cart' component={Cart}/>
 
</Switch>
<Footer/>
    </React.Fragment>
  );
}

export default App;
