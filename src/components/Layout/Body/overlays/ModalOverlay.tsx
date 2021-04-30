import React from "react";
import classes from './modalOverlay.module.css';

const ModalOverlay = (props: any) => {
    return (
        <div className={`${classes.modalOverlay} ${props.active?classes.active:""}`}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className={'flex-2'}>
                <button className={`${classes.buttonConfirm} ${classes.button}`} onClick={()=>{props.onClick('confirm')}}>{props.confirm}</button>
                <button className={`${classes.buttonCancel} ${classes.button}`} onClick={()=>{props.onClick('cancel')}}>{props.cancel}</button>
            </div>
        </div>
    )
}

export default ModalOverlay;