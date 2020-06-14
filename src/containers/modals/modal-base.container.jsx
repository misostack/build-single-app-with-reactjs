import React, { Component } from "react";
import { useHistory } from "react-router-dom";

const ModalBaseContainer = (props) => {
  let history = useHistory();
  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">{props && props.children}</div>
      <button
        className="modal-close is-large"
        onClick={back}
        aria-label="close"
      ></button>
    </div>
  );
};

export default ModalBaseContainer;
