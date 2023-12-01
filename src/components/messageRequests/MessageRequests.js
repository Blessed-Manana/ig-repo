import "./MessageRequests.css";
import { Box, Button, Grid, Link } from "@mui/material";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";

const MessageRequests = () => {
  let users = [
    {
      handel: "anisa.xolisile",
      isFollewing: "Message Preveiw...",
      image: "userPic2.jpg",
    },
    {
      handel: "slim_Shaddy",
      isFollewing: "Message Preveiw...",
      image: "eminem.webp",
    },
    {
      handel: "richa.unt",
      isFollewing: "Message Preveiw...",
      image: "userPic3.jpeg",
    },
  ];

  return (
    <Box className="messageRequests">
      <Grid className="existHeading">
        <IoIosArrowRoundBack className="existHeadingIcon" />
        <h1>Message Requests</h1>
      </Grid>
      <Grid className="infoLink">
        <p>
          Open a chat to get more info about who's messaging you. They won't
          know you've seen it until you accept.
        </p>
        <Link>Decide who can message you</Link>
      </Grid>
      <Grid className="requetedMsgBox">
        <Grid className="requetedMsg">
          {users.map((ele) => (
            <Grid className="selectUser">
              <Grid className="selectuserPic">
                <Grid className="selectpicBorder">
                  <img src={ele.image} alt="userimage" />
                </Grid>
              </Grid>
              <Grid className="selectHandle">
                <Link href="/Profile">{ele.handel}</Link>
                <p>{ele.isFollewing}</p>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid className="requetedMsg">
          <Grid className="selectUser">
            <Grid className="selectuserPic">
              <Grid className="selectpicBorder">
                <img src="eye-closed-svgrepo-com.svg" alt="userimage" />
              </Grid>
            </Grid>
            <Grid className="selectHandle2">
              <p>Hidden Requests</p>
              <FaChevronRight className="c" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
        <Grid className="requetedMsgButton">
          <Button>Delete all</Button>
        </Grid>
    </Box>
  );
};

export default MessageRequests;
