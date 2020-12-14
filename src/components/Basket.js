import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons"
import {Link} from 'react-router-dom'

function Basket() {
    return (
        <div className='bag'>
            <div className="iconbag">
            <FontAwesomeIcon icon={faShoppingBag} />
            </div>
            <h3>Your Bag Is Empty</h3>
            <h4>Sign In To View Your Bag</h4>
            <Link to='/login-sign-up'>
            <button>Sign In</button>
            </Link>

        </div>
    )
}

export default Basket
