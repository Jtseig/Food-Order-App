import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return (<div className={classes.backdrop} onClick={props.onHideModal}/>);
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.conent}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onHideModal={props.onHideModal}/>, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
