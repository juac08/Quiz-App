import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  let result = ((correct / questions.length) * 100).toFixed(0);
  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
      {result>50 ?
        <h2>congrats!</h2> :
        <h2>Try Agin For Good Result!</h2>  
      }
        <p>
          You answered {result}% of
          questions correctly
        </p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
