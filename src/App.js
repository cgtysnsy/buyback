import React,{useState} from "react"
import './App.css';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';



function App() {
  const [location, setLocation] = useState("MainPage")


  return (<div>
    {location === "MainPage" && <MainPage setLocation={setLocation} />}
    {location === "AboutPage" && <AboutPage setLocation={setLocation} />}
     </div>)

}

export default App;
