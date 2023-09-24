import React from "react";
import CrossIcon from "../Icon/CrossIcon";
import classes from './MissingPopUp.module.css'
import data from '../../jsonData/data.json'
import { statusAction } from "../../store/status-slice";
import { useDispatch } from "react-redux";

const MissingPopUp = (props) => {
    document.querySelector('body').style.overflow = 'hidden';
    const productId = props.productId;
    const dispatch = useDispatch()

    const isUrgentHandler = () => {
        dispatch(statusAction.urgent({id: productId, isYesClicked: true}))
        props.onHidePopup()
    }
    const notUrgentHandler = () => {
        dispatch(statusAction.urgent({id: productId}))
        props.onHidePopup()
    }
    const popUpCloseHandler = () => {
        document.querySelector('body').style.overflow = 'auto';
        props.onHidePopup()
    }
    return(
        <div className={classes.modal}>
        <div className={classes.popUp}>
            <div className={classes.popupHeader}>
                <h2>Missing Product</h2>
                <span onClick = { popUpCloseHandler } className={classes.crossIcon}>
                   <CrossIcon />
                </span>
            </div>
            <div className={classes.warningMsg}>
                <span className={classes.highlight}>Is</span>
                <span className={classes.content}>'{data.DUMMY_DATA[0].productname}</span>
                <span className={classes.urgent}>'urgent?</span>
            </div>
            <div className={classes.popUpBtn}>
                <span onClick={notUrgentHandler}>No</span>
                <span onClick={isUrgentHandler}>Yes</span>
            </div>
        </div>
        </div>

    )
}
export default MissingPopUp;