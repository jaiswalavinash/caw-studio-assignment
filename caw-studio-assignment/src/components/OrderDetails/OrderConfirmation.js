import React from "react";
import classes from "./OrderConfirmation.module.css";
import RightArrowIcon from "../Icon/RightArrowIcon";

const OrderConfirmation = () => {
  return (
    <div className={classes.orderConfirmation}>
      <div className={classes.order}>
        <span>Orders</span>
        <div className={classes.icon}>
         <RightArrowIcon />
        </div>
        <p>Order 32457ABC</p>
      </div>
      <div className={classes.orderNumberHighlight}>
        <span>Order 32457ABC</span>
        <div className={classes.orderbtn}>
            <button>Back</button>
            <button className={classes.approve}>Approve order</button>
        </div>
      </div>
    </div>
  );
};
export default OrderConfirmation;
