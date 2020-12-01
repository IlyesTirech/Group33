import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
const Nav = () => {
    return(

        <nav>
            <div className="nav-bar">
                
                <ul>
                    <li className="title"><a href="#">GARMS</a></li>
                    <li> <a href="#">WOMENS</a> </li>
                    <li> <a href="#">MENS</a> </li>
                    <li> <a href="#">KIDS</a> </li>
                    
                    <li> <a href="#"> <input type="search" placeholder="Search for items, charities, ect.."/></a> </li>
                  

                    
                    <li> <a href="#">LOGIN/SIGNUP</a> </li>
                    <li> <a href="#"> <FontAwesomeIcon icon={faUser} />  </a> </li>
                    <li> <a href="#"> <FontAwesomeIcon icon={faShoppingBag} />  </a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;