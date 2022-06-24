import React, {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";
import CartContext from "../../Source/cart_context";


const HeaderCartButton = props =>{
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
      return curNum + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onCart}>
            <span className={classes.icon}><CartIcon /></span>
            <span> Your Cart</span>
            <span className={classes.badge}> {numberOfCartItems} </span>
        </button>
    )
}
export default HeaderCartButton;