import React, { useContext, useEffect } from "react";
// import { connect } from 'react-redux';
import Basket from './Basket';
import ShopContext from "../context/shop-context";
import Nav from './Nav'
// import { removeProductFromCart } from '../store/actions';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons"
import {Link} from 'react-router-dom'

const Cart = props => {
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <>
   <Nav
   
    cartItemNumber={context.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)}
   />
      <main className="cart">
        { context.cart.length <= 0 && <div>
           <Basket/>
        </div>}
        <ul>        
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     cartItems: state.cart,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeProductFromCart: id => dispatch(removeProductFromCart(id))
//   };
// };

export default Cart;