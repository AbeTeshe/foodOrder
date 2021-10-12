import React, { Fragment } from "react";
import ReactDom from 'react-dom';
import "./Modal.css";

const BackDrop = (props) => {
    return <div className="backdrop" onClick={props.onClick}/>
};

const ModalOverlay = (props) => {
    return (
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return <Fragment>
        {ReactDom.createPortal(<BackDrop onClick={props.onClick}/>, portalElement)}
        {ReactDom.createPortal(<ModalOverlay >{props.children}</ModalOverlay>,
        portalElement)}
    </Fragment>
};

export default Modal;