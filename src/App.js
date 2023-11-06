import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./components/layout/sideNav/SideNav";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Reel from "./pages/Reel";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav2">
          <SideNav/>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/Explore" element={<Explore/>}></Route>
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
