import React, { useState, useReducer } from "react";

import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

const GlobalState = props => {
  const products = [
    { id: "p1", title: "Tracksuit", price: 29.99,  image:'https://www.footasylum.com/images/products/large/4042940.jpg?author=31&category_list_brands=kids&page=1&category_list=br_una&2b9ac7dd462f9da8430f3ffb41d5007c26451211=cid&sid=sessionid&term=air+force+1&qsusermode=desktop&name=air+max'},
    { id: "p2", title: "T-Shirt", price: 9.99, image:'https://shop.tate.org.uk/dw/image/v2/BBPB_PRD/on/demandware.static/-/Sites-TateMasterShop/default/dwaa107262/tate-logo-black--tshirt-back-g1086.jpg?sw=556' },
    { id: "p3", title: "Jeans", price: 0.99, image:'https://cache.net-a-porter.com/images/products/1201586/1201586_in_2000_q80.jpg' },
    { id: "p4", title: "Jacket", price: 2.99, image:'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1547146139/product-image/2078M_11_d.jpg' }
  
  ];
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };


  const removeProductFromCart = productId => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;