import React, { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";

function App() {
  const [location, setLocation] = useState("MainPage");
  console.log(location);

  return (
    <main>
      <div className="page-container">
        {location === "MainPage" && <MainPage setLocation={setLocation} />}
        {location === "ResultPage" && <ResultPage setLocation={setLocation} />}
      </div>
    </main>
  );
}

export default App;
