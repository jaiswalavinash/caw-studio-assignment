import React from "react";
import CartIcon from "../Icon/CartIcon";
import DownArrowIcon from '../Icon/DownArrowIcon'
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <span className={classes.nav}>
        <a href="#">
          <h2>Reeco</h2>
        </a>
        <a href="#">
          <p>Store</p>
        </a>
        <a href="#">
          <p>Orders</p>
        </a>
        <a href="#">
          <p>Analytics</p>
        </a>
      </span>
      <div className={classes.cartAndUser}>
        <span className={classes.carticon}>
          <CartIcon />
        </span>
        <div className={classes.userName}>
          <p>Hello, James</p>
          <span className={classes.downarrowicon}>
           <DownArrowIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
