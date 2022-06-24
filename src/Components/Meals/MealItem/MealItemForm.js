import React, {useContext, useRef, useState} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../Source/cart_context";

const MealItemForm = (props) => {
const [amountIsValid, setAmountIsValid] = useState(true);
const amountInputRef = useRef();

const sumbitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    console.log(enteredAmount);
    const enteredAmountNumber = +enteredAmount;
    if(enteredAmount.trim() === 0 || enteredAmount < 1 || enteredAmount > 5){
        setAmountIsValid(false);
        return;
    }
    props.onAddToCart(enteredAmount);
}
  
  return (
  <form className={classes.form} onSubmit={sumbitHandler}>
    <Input
      ref={amountInputRef}
      label="Amount"
      input={{
        id: "amount",
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1",
      }}
    />
    <button>+ Add</button>
    {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
  </form>
  );};

export default MealItemForm;
