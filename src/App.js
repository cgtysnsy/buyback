import React,{useState} from "react"
import './App.css';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';



function App() {
  const [location, setLocation] = useState("MainPage")


  return (
    <main>
      <div className="page-container">
        {location === "MainPage" && <MainPage setLocation=  {setLocation} />}
        {location === "AboutPage" && <ResultPage setLocation={setLocation} />}
        </div>
    </main>
  )

}

export default App;
