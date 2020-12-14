import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return(

        <div className="footer">

        <div className="help_info">
         <h3>Help and Information</h3>          
         <ul>
             <Link to='/delivery-and-returns'>
             <li>Delivery and Returns</li>
             </Link>
             <Link to='terms-and-conditions'>
             <li>Terms and Conditions</li>
             </Link>
             <Link to='helplines'>
             <li>Helplines</li>
             </Link>
         </ul>
        </div>
        <div className="about">
            <h3>About Garms</h3>
            <ul>
                <Link to='about-us'>
                <li>About Us</li>
                </Link>
                <Link to='donations'>
                <li>Donate Now</li>
                </Link>
                <Link to='/customer-services'>
                <li>Customer Services</li>
                </Link>
            </ul>
           
        </div>

        
        </div>
        
    )
}

export default Footer;