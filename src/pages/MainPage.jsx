import React from "react";
import Form from "../components/Form/Form";
import Modal from "../components/Modal/Modal";
import CartSummary from "../components/CartSummary/CartSummary";

const MainPage = ({ setLocation }) => {
  return (
    <>
      <Form setLocation={setLocation} />
      <CartSummary />
      {/* <Modal/> */}
    </>
  );
};

export default MainPage;
