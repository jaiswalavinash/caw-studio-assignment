import React from "react";
import classes from './OrderDetails.module.css'
import Balance from "../Icon/Balance";
import ArrowPointing from "../Icon/ArrowPointing";
import BackNote from "../Icon/BackNote";
import Cake from "../Icon/Cake"
import Computer from "../Icon/Computer";

const OrderDetails = () => {
    return(
        <div className={classes.orderDetails}>
            <div className={classes.supplier}>
                <span>Supplier</span> <br />
                <span>East Coast fruits <br/> & vegetables</span><br />
            </div>
            <div className={classes.verticalLine}></div>
            <div className={classes.supplier}>
                <span>Shipping date</span> <br />
                <span>Thu, Feb 10</span><br />
            </div>
            <div className={classes.verticalLine}></div>
            <div className={classes.supplier}>
                <span>Total</span> <br />
                <span>$ 15,028.3</span><br />
            </div>
            <div className={classes.verticalLine}></div>
            <div className={classes.supplier}>
                <span>Category</span> <br />
                <span className={classes.categoryIcon}>
                    <Balance />
                </span>
                <span className={classes.categoryIcon}>
                    <ArrowPointing />
                </span>
                <span className={classes.categoryIcon}>
                    <BackNote />
                </span>
                <span className={classes.categoryIcon}>
                    <Cake />
                </span>
                <span className={classes.categoryIcon}>
                    <Computer />
                </span>
            </div>
            <div className={classes.verticalLine}></div>
            <div className={classes.supplier}>
                <span>Department</span> <br />
                <span>300-444-678</span><br />
            </div>
            <div className={classes.verticalLine}></div>
            <div className={classes.supplier}>
                <span>Status</span> <br />
                <span>Awaiting your <br/> approval</span><br />
            </div>
        </div>
    )
}
export default OrderDetails;