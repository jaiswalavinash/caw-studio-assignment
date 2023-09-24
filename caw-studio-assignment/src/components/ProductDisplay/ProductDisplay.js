import React from "react";
import classes from "./ProductDisplay.module.css";
import Print from "../Icon/Print";
import SearchIcon from "../Icon/SearchIcon";
import ProductItem from "./ProductItem";
import data from '../../jsonData/data.json'

const productItemData = data.DUMMY_DATA;


const ProductDisplay = () => {
  return (
    <div className={classes.productDisplay}>
      <div className={classes.top}>
        <div className={classes.inputField}>
          <input placeholder="Search..."></input>
          <span className={classes.searchIcon}>
            <SearchIcon />
          </span>
        </div>
        <div className={classes.leftItem}>
          <button className={classes.addItemBtn}>Add item</button>
          <span className={classes.productIcon}>
            <Print />
          </span>
        </div>
      </div>
      <div className={classes.tableContainer}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th></th>
              <th className={classes.product}>Product name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {productItemData.map((item)=>{
            return (
                <ProductItem key={item.id} productInfo = {item} />
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductDisplay;
