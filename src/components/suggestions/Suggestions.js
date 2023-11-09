import { useState } from "react";
import { Box, Grid, Button, Link, Popover } from "@mui/material";
import "../suggestions/Suggestions.css";

const Suggestions = () => {
    let currentlyDay = new Date().getFullYear()

  return (
    <Box className="suggestions">
      <Grid className="switchUser">
        <Grid className="userPic">
          <Grid className="picBorder">
            <img src="userPic.jpg" alt="userimage" />
          </Grid>
        </Grid>
        <Grid className="sugHandle">
          <Link href="/Profile">Kees_rsa</Link>
          <p>kees</p>
        </Grid>
        <Grid className="switchbtn">
          <Link>Switch</Link>
        </Grid>
      </Grid>
      <Grid className="seeAll">
        <h3>Suggested for you</h3>
        <Link href="/">See All</Link>
      </Grid>
      <Grid className="suggestions2">
        <Grid className="switchUser">
          <Grid className="userPic">
            <Grid className="picBorder">
              <img src="userPic2.jpg" alt="userimage" />
            </Grid>
          </Grid>
          <Grid className="sugHandle">
            <Link href="/Profile">letii4488</Link>
            <p>Follows you</p>
          </Grid>
          <Grid className="switchbtn">
            <Link>Follow</Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="suggestions3">
        <Grid className="sugLink">
            <Link>About</Link> -
            <Link>Help</Link> -
            <Link>Press</Link> -
            <Link>API</Link> -
            <Link>Jobs</Link> -
            <Link>Privacy</Link> -
            <Link>Terms</Link> -
            <Link>Locations</Link> -
            <Link>Language</Link> -
            <Link>Meta Verified</Link>
        </Grid>
        <Grid className="sugDate">
            <p>©{currentlyDay} Instagram from Meta</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Suggestions;
