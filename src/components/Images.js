import React from 'react'
import {Link} from 'react-router-dom'
const Images = () => {
    return(

        <div className="image">
            <div className="paycard">
                    <img src="/img/visa (1).svg" alt=""/>
                    <img src="/img/ae.svg" alt=""/>
                    <img src="/img/mc.svg" alt=""/>                                           
                    <img src="/img/pp.svg" alt=""/>    
                    </div>
                
           <div className="social">
               <Link to=''>
                    <img src="/img/fb.svg" alt=""/>
                    </Link>
                    <Link to=''>
                    <img src="/img/ig.svg" alt=""/>
                    </Link>
                    <Link to=''>
                    <img src="/img/tw.svg" alt=""/>
                    </Link>
                    </div>
                
                
                    
              
                </div>
                
                    
                
      
    )
}

export default Images;
