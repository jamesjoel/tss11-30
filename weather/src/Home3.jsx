import React from "react";
import ReactDOM from "react-dom";

import "./Home3.css";

const modalRoot = document.getElementById("modal-root");

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="overlay">{props.children}</div>,
    modalRoot
  );
};

export default function Home3() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <button onClick={() => setOpen(!open)}>Menu</button>
      {open && (
        <Modal in={!open}>
          <p>MAKE THIS OVERLAY DISAPPEAR!!!</p>
        </Modal>
      )}
    </div>
  );
}
