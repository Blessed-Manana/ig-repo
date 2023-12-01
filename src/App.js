import "./App.css";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./components/layout/sideNav/SideNav";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import Requests from "./pages/Requests"
import Profile from "./pages/Profile";
import Reel from "./pages/Reel";
import Signup from "./pages/Signup";
import { useState } from "react";

function App() {
  const [navSpaceWidth, setNavSpaceWidth] = useState('250px'); // Initial width, you can adjust as needed

  const shrinkNavSpace = () => {
    setNavSpaceWidth('75px');
  };

  return ( 
    <BrowserRouter>
      <div className="App">
        <div className="nav2">
          <SideNav onMessageClick={shrinkNavSpace}/>
        </div>
        <div className="navSpace" style={{ width: navSpaceWidth }}></div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/Explore" element={<Explore/>}></Route>
            <Route path="/Requests" element={<Requests/>}></Route>
            <Route path="/Messages" element={<Messages/>}></Route>
            <Route path="/Reel" element={<Reel/>}></Route>
            <Route path="/Profile" element={<Profile/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
