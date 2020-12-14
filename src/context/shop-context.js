import React from "react";

export default React.createContext({
  products: [
    { id: "p1", title: "Tracksuit", price: 29.99 },
    { id: "p2", title: "T-Shirt", price: 9.99 },
    { id: "p3", title: "Jeans", price: 0.99 },
    { id: "p4", title: "Jacket", price: 2.99 }
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
