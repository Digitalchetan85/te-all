import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Topheader from "./Components/Includes/Topheader";
import Footer from "./Components/Includes/Footer";
import Pursuit from "./Components/Pursuit/Pursuit";
import QuiteEarth from "./Components/QuiteEarth/QuiteEarth";
import WindMill from "./Components/WindMill/WindMill";
import AfterTheRain from "./Components/AfterTheRain/AfterTheRain";

function App() {
  return (
    <Router>
      <Topheader />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/projects/pursuit-of-radical-rhapsody" index element={<Pursuit />}></Route>
          <Route path="/projects/quiet-earth" index element={<QuiteEarth />} ></Route>
          <Route path="/projects/wind-mill" index element={<WindMill />}></Route>
          <Route path="/projects/after-the-rain" index element={<AfterTheRain />}></Route>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
