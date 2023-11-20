import React, { useState, useEffect } from "react";
import { Box, Grid, Link, Button } from "@mui/material";
import Popover from "@mui/material/Popover";
import "./Explore.css";

import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { RiBookmarkLine } from "react-icons/ri";

// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ExploreContent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPicture, setSelectedPicture] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setPictures(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div style={{ color: "#fff" }}>Loading...</div>;
  }

  const handleClick = (event, picture) => {
    event.persist();
    setAnchorEl(event.currentTarget);
    setSelectedPicture(picture);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid container className="explore" spacing={1}>
      {pictures.map((picture) => (
        <Grid item key={picture.id} xs={12} sm={6} md={4} lg={3}>
          <Box
            className="imageBox"
            aria-describedby={id}
            onClick={(event) => handleClick(event, picture)}
          >
            <img
              src={picture.image}
              alt={picture.title}
              style={{ maxWidth: "100%" }}
            />
          </Box>

          <Popover
            className="popover2"
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 35, left: 130 }}
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
                  width: "80%",
                  margin: "auto",
                  height: "90%",
                  borderRadius: "5px",
                },
              },
            }}
          >
            <Box className="previewPost">
              <Grid className="img">
                {selectedPicture && (
                  <img
                    src={selectedPicture.image}
                    alt={selectedPicture.title}
                    style={{ maxWidth: "100%" }}
                  />
                )}
              </Grid>
              <Grid className="commentSection">
                <Grid className="commentBox">
                  <Grid className="userPic">
                    <Grid className="picBorder">
                      <img src="userPic4.jpeg" alt="user img" />
                    </Grid>
                  </Grid>
                  <Grid className="handle">
                    <Link className="userHandle">UserHandle</Link> .{" "}
                    <Link className="follow">Follow</Link>
                  </Grid>
                </Grid>
                <Grid className="commentBox2">

                </Grid>
                <Grid className="commentBox3">
                  <Grid className="iconBox">
                    <Grid className="commentBox3Left">
                      <FaRegHeart className="commentBox3Icon"/>
                      <FaRegComment className="commentBox3Icon"/>
                      <FiSend className="commentBox3Icon"/>
                    </Grid>
                    <Grid className="commentBox3Right">
                      <RiBookmarkLine className="commentBox3Icon"/>
                    </Grid>
                  </Grid>
                  <Grid className="postInfo">
                    <p className="likes">127 Likes</p>
                    <p className="postDate">1 DAY AGO</p>
                  </Grid>
                </Grid>
                <Grid className="commentBox4">
                  <input type="text" placeholder="Add a comment..."/>
                  <Button>Post</Button>
                </Grid>
              </Grid>
            </Box>
          </Popover>
        </Grid>
      ))}
    </Grid>
  );
};

export default ExploreContent;
