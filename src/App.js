
import React from 'react'
import "./styles/App.css"
import Nav from './components/Nav'
import UnderNav from './components/UnderNav'
import Footer from './components/Footer';
import UnderFooter from './components/UnderFooter'
import Images from './components/Images'
import Slider from './components/Slider'
import Cards from './components/Cards'

function App(){
 
  return (
    <div >
     <Nav />
    <UnderNav/>
    <Slider/>
<Cards/>
   <Footer/>
   <Images/>
  <UnderFooter/>
     
    </div>
    
    
  );
  }



export default App;
