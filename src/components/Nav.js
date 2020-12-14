import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons"
import {Link} from 'react-router-dom'
import ShopContext from "../context/shop-context";
import UnderNav from './UnderNav'

const Nav = props => {


    return(
       <div>
        <nav className='nav-bar'>          
                <ul >
                    <Link to='/'>
                    <li className="title">GARMS</li>
                    </Link>
            
                    <li className='nav-item'> <Link to='/womens' className='nav-links'> WOMENS </Link> </li>                   

                    <li className='nav-item'> <Link to='/mens' className='nav-links'> MENS </Link> 
                    </li>
                    
                    <li className='nav-item'> <Link to='/kids' className='nav-links'> KIDS </Link> 
                   </li>
                    
                    <li> <input type="search" placeholder="Search for items, charities, ect.."/> </li>
                  

                    <li > <Link to='/login-sign-up' className='nav-links'> Sign Up </Link> 
                    </li>
                    <Link to='profile'>
                    <li>  <FontAwesomeIcon icon={faUser} />  </li>
                    </Link>
                    <Link to='/cart'>
                    <li><FontAwesomeIcon icon={faShoppingBag} /> ({props.cartItemNumber})  </li>
    
                    </Link>
                </ul>

                
            
        </nav>

        <UnderNav/>
        </div>
    )
}

export default Nav;