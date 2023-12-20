import React from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Success from "../components/Success/Success";
import Modal from "../components/Modal/Modal";

const ResultPage = ({
  setLocation,
  modalHandler,
  setModalHandler,
  openModal,
  closeModal,
}) => {
  return (
    <>
      <Success setLocation={setLocation} />
      <ProgressBar openModal={openModal} closeModal={closeModal} />
      <Modal closeModal={closeModal} modalHandler={modalHandler} />
    </>
  );
};

export default ResultPage;
