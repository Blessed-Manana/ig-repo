import React, { useState } from "react";
import { Box, Grid, Tabs, Tab, Typography, Link } from "@mui/material";
import { BiMessageSquareEdit } from "react-icons/bi";
import "./UserSelection.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const UserSelection = () => {
  const [value, setValue] = useState(0);
  let users = [
    {
      handel: "anisa.xolisile",
      isFollewing:"Message Preveiw...",
      image: "userPic2.jpg", 
    },
    {
      handel: "slim_Shaddy",
      isFollewing:"Message Preveiw...",
      image: "eminem.webp", 
    },
    {
      handel: "richa.unt",
      isFollewing:"Message Preveiw...", 
      image: "userPic3.jpeg",
    },
    {
      handel: "bohlale3",
      isFollewing:"Message Preveiw...", 
      image: "userPic4.jpeg",
    },
    {
      handel: "just_A_nother_guy",
      isFollewing:"Message Preveiw...",
      image: "mac_miller.webp", 
    },
    {
      handel: "iss_yuri",
      isFollewing:"Message Preveiw...", 
      image: "userPic5.jpg",
    },
    {
      handel: "letii4488",
      isFollewing:"Message Preveiw...",
      image: "userPic6.webp", 
    },
    {
      handel: "imAbaddieee",
      isFollewing:"Message Preveiw...",
      image: "cardi.webp", 
    },
  ]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="userSelectionContent">
      <Grid className="switchHandle">
        <Grid className="handle">
          <h1>User_rsa</h1>
        </Grid>
        <Grid className="searchUser">
          <BiMessageSquareEdit className="searchUserIcon" />
        </Grid>
      </Grid>
      <Grid className="tabs">
        <Grid className="primaryGeneral">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Primary" {...a11yProps(0)} style={{color: "#ffffffb0 ", fontSize: "14px", textTransform: "none", fontWeight: "bolder"}}/>
                <Tab label="General" {...a11yProps(1)} style={{color: "#ffffffb0 ", fontSize: "14px", textTransform: "none", fontWeight: "bolder"}}/>
              </Tabs>
            </Box>
          </Box>
        </Grid>
        <Grid className="requests">
          <Link href="/Requests">Requests</Link>
        </Grid>
      </Grid>
        <CustomTabPanel className="users" value={value} index={0}>
        {
          users.map((ele)=>(
            <Grid className="selectUser">
              <Grid className="selectuserPic">
                <Grid className="selectpicBorder">
                  <img src={ele.image} alt="userimage" />
                </Grid>
              </Grid>
              <Grid className="selectHandle">
                <Link href="/Profile">{ele.handel}</Link>
                <p className="isFollowing">{ele.isFollewing}</p>
              </Grid>
            </Grid>
          ))
        }
        </CustomTabPanel>
        <CustomTabPanel className="users users2" value={value} index={1}>
            No messages found.
        </CustomTabPanel>
    </Box>
  );
};

export default UserSelection;

