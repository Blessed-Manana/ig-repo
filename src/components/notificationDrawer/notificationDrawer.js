import "./notificationdrawer.css";

import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";

const NotificationDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const Feeds1 = [
    {
      img: "image",
      UserName1: "johnnyoka,",
      whoYouMightKnow: "Who you might know, is on instagram.",
      days: "1d"
    },
  ];

  const Feeds2 = [
    {
      img2: "image",
      UserName2: "johnnyoka,",
      whoYouMightKnow2: "Who you might know, is on instagram.",
      days2: "1d"
    },
    {
      img2: "image",
      UserName2: "johnnyoka,",
      whoYouMightKnow2: "Who you might know, is on instagram.",
      days2: "1d"
    },
    {
      img2: "image",
      UserName2: "johnnyoka,",
      whoYouMightKnow2: "Who you might know, is on instagram.",
      days2: "1d"
    },
  ];

  const Feeds3 = [
    {
      img3: "image",
      UserName3: "johnnyoka,",
      whoYouMightKnow3: "Who you might know, is on instagram.",
      days3: "1d"
    },
    {
      img3: "image",
      UserName3: "johnnyoka,",
      whoYouMightKnow3: "Who you might know, is on instagram.",
      days3: "1d"
    },
    {
      img3: "image",
      UserName3: "johnnyoka,",
      whoYouMightKnow3: "Who you might know, is on instagram.",
      days3: "1d"
    },
    {
      img3: "image",
      UserName3: "johnnyoka,",
      whoYouMightKnow3: "Who you might know, is on instagram.",
      days3: "1d"
    },
  ];

  return (
    <div className="notificationDrawerContainer">
      <p onClick={openDrawer} id="Notifications">Notifications</p>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} id="drawer">
        <div className="mainContainer">
          <div className="notificationSpanContainer">
            <span>Notifications</span>
          </div>
          <div className="todayContainer">
            <span>Today</span>
          </div>
          <div className="Feeds1">
            {Feeds1.map((Feed1, index) => {
              return <div key={index} className="feed1">
                <div  className="imgContainer0"><div className="imgContainer1"></div></div>
                <div className="UserName1whoYouMightKnowdays">
                  <p ><span id="UserName1">{Feed1.UserName1}</span>{Feed1.whoYouMightKnow}</p>
                  <p id="days"> {Feed1.days} </p>
                </div>
                <div className="followBtn">
                  <button>Follow</button>
                </div>
              </div>;
            })}
          </div>
          <hr/>
          <div className="Feeds2">
          <div className="todayContainer">
            <span>This week</span>
          </div>
            {Feeds2.map((Feed2, index) => {
              return <div key={index} className="feed2">
                <div><div className="imgContainer2"></div></div>
                <div className="UserName1whoYouMightKnowdays2">
                  <p ><span id="UserName2">{Feed2.UserName2}</span>{Feed2.whoYouMightKnow2}</p>
                  <p id="days"> {Feed2.days2} </p>
                </div>
                <div className="followBtn2">
                  <button>Follow</button>
                </div>
              </div>;
            })}
          </div>
          <hr/>
          <div className="Feeds3">
            <div className="todayContainer">
            <span>This month</span>
          </div>
            {Feeds3.map((Feed3, index) => {
              return <div key={index} className="feed3">
                <div><div className="imgContainer3"></div></div>
                <div className="UserName1whoYouMightKnowdays3">
                  <p ><span id="UserName3">{Feed3.UserName3}</span>{Feed3.whoYouMightKnow3}</p>
                  <p id="days"> {Feed3.days3} </p>
                </div>
                <div className="followBtn3">
                  <button>Follow</button>
                </div>
              </div>;
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default NotificationDrawer;
