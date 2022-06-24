import React, { useContext, useReducer } from "react";
import CartContext from "./cart_context";

  const defaultCartState = {
    items: [],
    totalAmount: 0,
  };

const cartReducerHandler = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
};

const CartContextProvider = (props) => {
  
  const [cartState, dispatchCartAction] = useReducer(
    cartReducerHandler,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "DELETE_ITEM", id: id });
  };

  const CartContextObject = {
    items: cartState.items,
    price: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={CartContextObject}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
