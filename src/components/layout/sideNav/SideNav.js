"use client";
import React from "react";
import { useState } from "react";
import { Box, Grid, Button, Link, Popover } from "@mui/material";
import "../sideNav/SideNav.css";
import {
  Home,
  Search,
  Explore,
  SendOutlined,
  FavoriteBorderOutlined,
  AddBoxOutlined,
  Menu,
  PersonRounded,
  Settings,
  BookmarkBorder,
} from "@mui/icons-material";

//drawer

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CancelIcon from "@mui/icons-material/Cancel";
import ClearIcon from "@mui/icons-material/Clear";

import { LuActivitySquare } from "react-icons/lu";
import { BiSolidMoviePlay } from "react-icons/bi";
import { SiThreads } from "react-icons/si";
import { GoMoon } from "react-icons/go";
import { TbMessageReport } from "react-icons/tb";

// Recents Pop Over
// import * as React from 'react';
// import Popover from '@mui/material/Popover';
import Typography from "@mui/material/Typography";
import NotificationDrawer from "../../notificationDrawer/notificationDrawer";
// import Button from '@mui/material/Button';

const SideNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const id = "menu-popover";
  const id2 = "menu-popover2";

  const reecents = [
    {
      recentImg: "image",
      spanAccountName: "johnnyoka5",
      spanUserName: "John Nyoka",
    },
    {
      recentImg: "image",
      spanAccountName: "johnnyoka5",
      spanUserName: "John Nyoka",
    },
     {
      recentImg: "image",
      spanAccountName: "johnnyoka5",
      spanUserName: "John Nyoka",
    },
    {
      recentImg: "image",
      spanAccountName: "johnnyoka5",
      spanUserName: "John Nyoka",
    },
    {
      recentImg: "image",
      spanAccountName: "johnnyoka5",
      spanUserName: "John Nyoka",
    },
    
  ];

  // recents

  const [anchorEl0, setAnchorEl0] = React.useState(null);

  const handleClick0 = (event) => {
    setAnchorEl0(event.currentTarget);
  };

  const handleClose0 = () => {
    setAnchorEl0(null);
  };

  const open = Boolean(anchorEl0);
  const id0 = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const [state, setState] = React.useState({
    left: false,
  });

  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsSearchDrawerOpen(!isSearchDrawerOpen);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    

    setState({ ...state, [anchor]: open });
  };


  // notification drawer
  const [isOpen, setIsOpen] = useState(true); 
  const handleCloseDrawer = () => {
    setIsOpen(false); // Close the drawer
  };
 

  const list = (anchor, isOpen) => (
    
    <Drawer
      anchor={anchor}
      open={isOpen}
      PaperProps={{
        className: "custom-drawer",

        style: {
          marginLeft: "60px",
          position: "absolute",
          backgroundColor: "black",
          color: "white",
          borderRight: "1px solid grey",
          width: "300px",
          borderRadius: "10px",
        },
      }}
      
    >
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={(e) => e.stopPropagation()} // Stop propagation to prevent closing
        onKeyDown={(e) => e.stopPropagation()} // Stop propagation to prevent closing
        id="Box"
      >
        {/* Your content here */}
        <div className="searchText">
          <p>Search</p>
        </div>
        <div className="seacrchContainer">
          <input type="search" />
        </div>
      </Box>
      <hr />
      <div className="recentsHolder">
        <div className="recentsClearAll">
          <div id="recent">Recent</div>
          <div className="clearAllBtnHolder">
            <Button
              // aria-describedby={id0}
              // variant="contained"
              onClick={handleClick0}
              id="clearAllBtn"
            >
              Clear All
            </Button>
            <Popover
              id0={id0}
              open={open}
              anchorEl0={anchorEl0}
              onClose={handleClose0}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 220, left: 500 }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              i
              slotProps={{
                paper: {
                  sx: {
                    background: "#262626",
                    width: "400px",
                    margin: "auto",
                    height: "238px",
                    borderRadius: "10px",
                    color: "white",
                    textAlign: "center",
                  },
                },
              }}
            >
              <div className="h2pHolder">
                <h2>Clear search history?</h2>
                <p>
                  You won't be able to undo this. If you clear your search
                  history, you may still see accounts that you've searched for
                  as suggested results.
                </p>
              </div>
              <hr />
              <div className="clearAllRed">Clear All</div>
              <hr />
              <div className="notNow">Not now</div>
            </Popover>
          </div>
        </div>
      </div>
      <div className="reecents">
        {reecents.map((reecent, index) => (
          <div key={index} className="reecent">
            <div className="recentImgspanAccountNamespanUserNameX">
              <div className="recentImgspanAccountNamespanUserName">
                <div className="recentImg"></div>
                <div className="spanAccountNamespanUserName">
                  <span id="spanAccountName">{reecent.spanAccountName}</span>
                  <br />
                  <span className="spanUserName">{reecent.spanUserName}</span>
                </div>
              </div>
              <div className="X">
                <ClearIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Drawer>
  );

  return (
    <Box className="nav">

   {/* notification drawer */}

   


      <Grid className="svg">
        {isSearchDrawerOpen ? (
          ""
        ) : (
          <Link href="/">
            <svg
              aria-label="Instagram"
              className="x1lliihq x1n2onr6"
              color="rgb(245, 245, 245)"
              fill="rgb(245, 245, 245)"
              height="29"
              role="img"
              viewBox="32 4 113 32"
              width="103"
            >
              <title>Instagram</title>
              <path
                fillRule="evenodd"
                d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
          </Link>
        )}
      </Grid>
      <Grid className="btnContainer">
        <Link href="/" to="/Home">
          <Button className="navBtn">
            <Home className="navIcon" />
            {isSearchDrawerOpen ? "" : "Home"}
          </Button>
        </Link>
      </Grid>
      <Grid
        className="
      "
      >
        <Button onClick={() => setIsSearchDrawerOpen(true)} id="searchBUT">
          <Search className="navIcon" />
          {isSearchDrawerOpen ? "" : "Search"}
        </Button>
      </Grid>
      <Grid className="btnContainer">
        <Link href="/Explore">
          <Button className="navBtn">
            <Explore className="navIcon" />
            {isSearchDrawerOpen ? "" : "Explore"}
          </Button>
        </Link>
      </Grid>
      <Grid className="btnContainer">
        <Link href="/Reel">
          <Button className="navBtn">
            <BiSolidMoviePlay className="navIcon reels" />
            {isSearchDrawerOpen ? "" : "Reels"}
          </Button>
        </Link>
      </Grid>
      <Grid className="btnContainer">
        <Link href="/Messages">
          <Button className="navBtn">
            <SendOutlined className="navIcon mssg" />
            {isSearchDrawerOpen ? "" : "Messages"}
          </Button>
        </Link>
      </Grid>
      <Grid className="btnContainer">
        <Button className="navBtn">
          <FavoriteBorderOutlined className="navIcon" />
          {/* {isSearchDrawerOpen ? "" : "Notifications"} */}
          <NotificationDrawer/>
        </Button>
      </Grid>
      <Grid className="btnContainer Create">
        <Button className="navBtn" aria-describedby={id} onClick={handleClick2}>
          <AddBoxOutlined className="navIcon" />
          {isSearchDrawerOpen ? "" : "Create"}
        </Button>
        <Popover
          className="popover2"
          id={id2}
          open={Boolean(anchorEl2)}
          anchorEl={anchorEl2}
          onClose={handleClose2}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 95, left: 430 }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          slotProps={{
            paper: {
              sx: {
                background: "#262626",
                width: "30%",
                margin: "auto",
                height: "70%",
                borderRadius: "15px",
              },
            },
          }}
        >
          <Grid className="addPosth1">
            <h1>Create new post</h1>
          </Grid>
          <Grid className="addPostContainer">
            <Grid className="addPost">
              <Grid className="addPostIcon">
                <label htmlFor="addPost">
                  <svg
                    aria-label="Icon to represent media such as images or videos"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="77"
                    role="img"
                    viewBox="0 0 97.6 77.3"
                    width="96"
                  >
                    <title>
                      Icon to represent media such as images or videos
                    </title>
                    <path
                      d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </label>
                <input type="file" id="addPost" />
              </Grid>
              <p>Drag photos and videos here</p>
              <Grid className="addPostBtn">
                <label htmlFor="addPost">
                  <Button>Select from computer</Button>
                </label>
              </Grid>
            </Grid>
          </Grid>
        </Popover>
      </Grid>
      <Grid className="btnContainer">
        <Link href="/Profile">
          <Button className="navBtn">
            <PersonRounded className="navIcon" />
            {isSearchDrawerOpen ? "" : "Profile"}
          </Button>
        </Link>
      </Grid>
      <Grid className="btnContainer morebtn">
        <Button className="navBtn" aria-describedby={id} onClick={handleClick}>
          <Menu className="navIcon" />
          {isSearchDrawerOpen ? "" : "More"}
        </Button>
        <Popover
          className="popover"
          id={id}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 173, right: 150 }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          slotProps={{
            paper: {
              sx: {
                background: "#262626",
                width: "260px",
                margin: "-65px 0px 0px 20px",
                // height: "451px",
                borderRadius: "15px",
                padding: "8px 0px",
              },
            },
          }}
        >
          <Grid className="popBtn1">
            <Grid className="btnBox">
              <Button>
                <Settings className="navIcon" />
                Settings
              </Button>
            </Grid>
            <Grid className="btnBox">
              <Button>
                <LuActivitySquare className="navIcon" />
                Your activity
              </Button>
            </Grid>
            <Grid className="btnBox">
              <Button>
                <BookmarkBorder className="navIcon" />
                Saved
              </Button>
            </Grid>
            <Grid className="btnBox">
              <Button>
                <GoMoon className="navIcon" />
                Switch appearance
              </Button>
            </Grid>
            <Grid className="btnBox">
              <Button>
                <TbMessageReport className="navIcon" />
                Report a problem
              </Button>
            </Grid>
          </Grid>
          <Grid className="treadsBox">
            <Button>
              <SiThreads className="navIcon" />
              Threads
            </Button>
          </Grid>
          <Grid className="switchBox">
            <Button>Switch accounts</Button>
          </Grid>
          <Grid className="btnBox2">
            <Button>Log out</Button>
          </Grid>
        </Popover>
      </Grid>

      <Box sx={{ border: "5px solid red !important" }}>
        {isSearchDrawerOpen && list("left", isSearchDrawerOpen)}
      </Box>
    </Box>
  );
};

export default SideNav;
