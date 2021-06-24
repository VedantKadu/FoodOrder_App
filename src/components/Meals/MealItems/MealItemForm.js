import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [formValid, setFormValid] = useState(true);
  const amountItemRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmoutItems = amountItemRef.current.value;
    const enteredAmountItemsNumber = +enteredAmoutItems;

    if (
      enteredAmoutItems.trim().length === 0 ||
      enteredAmountItemsNumber < 1 ||
      enteredAmountItemsNumber > 5
    ) {
      setFormValid(false);
      return;
    }

    props.onAddToCart(enteredAmountItemsNumber);
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={amountItemRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!formValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
