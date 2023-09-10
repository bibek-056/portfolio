import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./Pages/Login";
import Resume from "./Pages/Resume";
import Map from "./Map/Map";

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/map" element={<Map/>}/>
      </Routes>
    </div>
  );
}

export default App;
