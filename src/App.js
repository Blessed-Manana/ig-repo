import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route, useHistory } from "react-router-dom";
import SideNav from "./components/layout/sideNav/SideNav";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Requests from "./pages/Requests";
import Profile from "./pages/Profile";
import Reel from "./pages/Reel";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState, useEffect } from "react";

function App() {
  const [isNavVisible, setNavVisible] = useState(true);
  // const history = useHistory();

  useEffect(() => {
    // Check the current route and hide the nav for "/Login" and "/Signup"
    const currentPath = window.location.pathname;
    if (currentPath === "/Login" || currentPath === "/Signup") {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
  }, []);

  const shrinkNavSpace = () => {
    setNavVisible(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* Conditional rendering of SideNav */}
        {isNavVisible && (
          <div className="nav2">
            <SideNav onMessageClick={shrinkNavSpace} />
          </div>
        )}

        <div className="navSpace" style={{ display: isNavVisible ? "block" : "none" }}></div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Requests" element={<Requests />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/Reel" element={<Reel />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
