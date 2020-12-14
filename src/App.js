
import React, {useState} from 'react'
import "./styles/App.css"
import Nav from './components/Nav'
import UnderNav from './components/UnderNav'
import Footer from './components/Footer';
import UnderFooter from './components/UnderFooter'
import Images from './components/Images'
import Women from './components/Women'
import LandingPage from './components/LandingPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import Men from './components/Men'
import Cart from './components/Cart';
import GlobalState from "./context/GlobalState";
import UNGoals from './components/UNGoals';
import FeaturedCharities from './components/FeaturedCharities';
import Donation from './components/Donation'
import AboutUs from './footerpages/AboutUs'
import CustomerServices from './footerpages/CustomerServices'
import DeliveryAndReturns from './footerpages/DeliveryAndReturns'
import Helplines from './footerpages/Helplines'
import TermsAndConditions from './footerpages/TermsAndConditions'
import Kids from './components/Kids'
import Profile from './components/Profile'
function App(){

  return (
<GlobalState>
    <Router>
    <div > 
     <Switch>
    <Route path="/" exact component={LandingPage}/>
    <Route path="/login-sign-up" component={SignUp}/>
    <Route path="/mens" component={Men}/>
    <Route path="/cart" component={Cart}/>
   <Route path ="/womens" component={Women}/>
   <Route path='/kids' component={Kids}/>
   <Route path="/learn-about-un-goals" component={UNGoals}/>
   <Route path="/featured-charities" component={FeaturedCharities}/>
   <Route path='/about-us' component={AboutUs}/>
   <Route path='/customer-services' component={CustomerServices}/>
   <Route path='/delivery-and-returns' component={DeliveryAndReturns}/>
   <Route path='/helplines' component={Helplines}/>
   <Route path='/terms-and-conditions' component={TermsAndConditions}/>
   <Route path='/donations' component={Donation}/>
   <Route path='/profile' component={Profile}/>


    </Switch>
   <Footer/>
   <Images/>
  <UnderFooter/> 
    </div>
    </Router>
    </GlobalState>

    
  );
  }



export default App;
