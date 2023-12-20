import React, { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";

function App() {
  const [location, setLocation] = useState("MainPage");
  const [modalHandler, setModalHandler] = useState(false);
  const openModal = () => setModalHandler(true);
  const closeModal = () => setModalHandler(false);

  return (
    <main>
      <div className="page-container">
        {location === "MainPage" && (
          <MainPage
            location={location}
            setLocation={setLocation}
            modalHandler={modalHandler}
            setModalHandler={setModalHandler}
            openModal={openModal}
            closeModal={closeModal}
          />
        )}
        {location === "ResultPage" && (
          <ResultPage
            setLocation={setLocation}
            modalHandler={modalHandler}
            setModalHandler={setModalHandler}
            openModal={openModal}
            closeModal={closeModal}
          />
        )}
      </div>
    </main>
  );
}

export default App;
