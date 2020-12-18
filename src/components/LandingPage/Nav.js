import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons"
import {Link} from 'react-router-dom'
import UnderNav from './UnderNav'

const Nav = props => {


    return(
       <div>
     
        <nav className='nav-bar'>          
                <ul >
                    
                <Link to='/'>
                    <li className="title">GARMS</li>
                    </Link>

           <Link to='/womens'>
                    <li className='nav-item'>   WOMENS  </li>                   
                    </Link>

                    <Link to='/mens'>
                    <li className='nav-item'>  MENS  
                    </li>
                    </Link>
                    <li className='nav-item'>  KIDS
                   </li>
                    
                    <li> <input type="search" placeholder="Search for items, charities, ect.."/> </li>
                  

                    <li >  Sign Up 
                    </li>
                    
                    <li>  <FontAwesomeIcon icon={faUser} />  </li>
                   
                    <Link to='/cart'>
                    <li><FontAwesomeIcon icon={faShoppingBag} />   </li>
                    </Link>
                    
                </ul>

                
            
        </nav>

        <UnderNav/>
        </div>
       
    )
}

export default Nav;