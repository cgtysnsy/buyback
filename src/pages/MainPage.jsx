import React, { useState } from "react";
import Form from "../components/Form/Form";
import Modal from "../components/Modal/Modal";
import CartSummary from "../components/CartSummary/CartSummary";

const MainPage = ({ setLocation }) => {
  const [modalHandler, setModalHandler] = useState(false);
  const openModal = () => setModalHandler(true);
  const closeModal = () => setModalHandler(false);
  return (
    <>
      <Form setLocation={setLocation} openModal={openModal} />
      <CartSummary openModal={openModal} />
      <Modal closeModal={closeModal} modalHandler={modalHandler} />
    </>
  );
};

export default MainPage;
