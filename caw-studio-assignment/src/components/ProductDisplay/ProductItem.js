import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import classes from "./ProductItem.module.css";
import AvocadoImg from "../../assets/Avocado Hass.jpg";
import CheckIcon from "../Icon/CheckIcon";
import CrossIcon from "../Icon/CrossIcon";
import GreenCheckIcon from "../Icon/greenCheckIcon";
import RedCrossIcon from '../Icon/redCrossIcon'
import { statusAction } from "../../store/status-slice";
import MissingPopUp from "../PopUp/MissingPopUp";

const ProductItem = (props) => {
  const [popUpShow, setPopupShow] = useState(false);
  const dispatch = useDispatch();
  const {id} = props.productInfo
  
  const approveStatus = useSelector((state) => state.status[id].itemApprove);
  console.log(approveStatus)
  const isUrgentConfirmation = useSelector((state) => state.status[id].isUrgent);
  const notUrgentStatus = useSelector((state)=> state.status[id].notUrgent)
  const productItemData = props.productInfo

  const crossHandler = () => {
    if(!approveStatus){
        setPopupShow(true);
    }
  };
  const checkHandler = () => {
    if(!isUrgentConfirmation && !notUrgentStatus){
        dispatch(statusAction.approve({id}));
    }
  };
  const popUpClose = () =>{
    setPopupShow(false)
  }
  let btn
  if(isUrgentConfirmation){
    btn = <button className={classes.missingUrgent}>Missing-Urgent</button>
  }else if(!isUrgentConfirmation && notUrgentStatus){
    btn = <button className={classes.missing}>Missing</button>
  }else if(approveStatus){
    btn = <button className={classes.approved}>Approved</button>
  }
  return (
    <React.Fragment>
      {popUpShow && <MissingPopUp productId={id} onHidePopup = {popUpClose} />}
      <tr>
        <td>
          <img
              className={classes.imgDimension}
              src={AvocadoImg}
              alt="AvocadoImg"
            ></img>
        </td>
        <td>
          <span>{productItemData.productname}</span>
        </td>
         <td>
         {productItemData.brand}
         </td>
        <td>
        {productItemData.price}
        </td>
        <td>
        <strong style={{ color: "black" }}>
              {productItemData.quantity}
            </strong>
        </td>
        <td>
        {productItemData.totalPrice}
        </td>
        
        <td className={classes.status}>
          {btn}
        </td>
        <td>
          <div style={{display: "inline-flex", gap: "10px"}}>
            <span onClick={checkHandler} className = {classes.checkIcon}>
              {approveStatus ? <GreenCheckIcon /> : <CheckIcon />}
            </span>
            <span onClick={crossHandler} className={classes.crossIcon}>
              {isUrgentConfirmation || notUrgentStatus ? <RedCrossIcon /> :<CrossIcon />}
            </span>
            <span  className={classes.editBtn}>
              Edit
            </span>
          </div>
          
        </td>
      </tr>
    </React.Fragment>
  );
};
export default ProductItem;
