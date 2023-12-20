import React, { useState } from "react";
import Form from "../components/Form/Form";
import Modal from "../components/Modal/Modal";
import CartSummary from "../components/CartSummary/CartSummary";

const MainPage = ({
  location,
  setLocation,
  modalHandler,
  setModalHandler,
  openModal,
  closeModal,
}) => {
  return (
    <>
      <Form
        setLocation={setLocation}
        openModal={openModal}
        location={location}
      />
      <CartSummary openModal={openModal} />
      <Modal closeModal={closeModal} modalHandler={modalHandler} />
    </>
  );
};

export default MainPage;
