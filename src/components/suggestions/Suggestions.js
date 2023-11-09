import { Box, Grid, Link } from "@mui/material";
import "../suggestions/Suggestions.css";

const Suggestions = () => {
    let currentlyDay = new Date().getFullYear()
    let users = [
      {
        handel: "anisa.xolisile",
        isFollewing:"Followed by lost_boy_cruz + 2 more...",
        image: "userPic2.jpg", 
      },
      {
        handel: "richa.unt",
        isFollewing:"Followed by txr_djs + 5 more", 
        image: "userPic3.jpeg",
      },
      {
        handel: "bohlale3",
        isFollewing:"Followed by puseayanda + 3 more...", 
        image: "userPic4.jpeg",
      },
      {
        handel: "iss_yuri",
        isFollewing:"Follows you", 
        image: "userPic5.jpg",
      },
      {
        handel: "letii4488",
        isFollewing:"Followed by _your_fav_kink",
        image: "userPic6.webp", 
      },
    ]

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
        {
          users.map((ele)=>(
            <Grid className="switchUser">
              <Grid className="userPic">
                <Grid className="picBorder">
                  <img src={ele.image} alt="userimage" />
                </Grid>
              </Grid>
              <Grid className="sugHandle">
                <Link href="/Profile">{ele.handel}</Link>
                <p className="isFollowing">{ele.isFollewing}</p>
              </Grid>
              <Grid className="switchbtn">
                <Link>Follow</Link>
              </Grid>
            </Grid>
          ))
        }
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
