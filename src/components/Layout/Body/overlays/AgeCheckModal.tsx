import React, {Fragment, useState} from "react";
import ReactDOM from 'react-dom';
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const AgeCheckModal = (props: any) => {
    const [active, setActive] = useState(props.active);

    const backdropPortalRoot = document.getElementById('backdrop-root');
    const modalPortalRoot = document.getElementById('overlay-root');

    const leaveWebsite = () =>{
        window.open('https://google.com', '_self');
    }

    const onClick = (userInput:string) =>{
        (userInput === 'confirm')? setActive(false):leaveWebsite();
    }

    return (backdropPortalRoot && modalPortalRoot)? (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop active={active} />, backdropPortalRoot)}
            {ReactDOM.createPortal(<ModalOverlay active={active} className='show' title='Age Check' description='Bist du 16 jahre oder älter?' confirm='Ja' cancel='Nein' onClick={onClick}/>, modalPortalRoot)}
        </Fragment>
    ) : null;
}

export default AgeCheckModal;