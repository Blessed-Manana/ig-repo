import { Grid, Box, Link } from "@mui/material";
import "./Chats.css"
import { CiMicrophoneOn } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";

const ChatRoom = () => {
  return (
    <Box className="chats">
      <Grid className="chatBox1">
        <Grid className="chatUser">
          <Grid className="chatuserPic">
            <Grid className="chatpicBorder">
              <img src="userPic.jpg" alt="userimage" />
            </Grid>
          </Grid>
          <Grid className="chatHandle">
            <Link href="/Profile">Kees_rsa</Link>
            <p>Active now</p>
          </Grid>
        </Grid>
        <Grid className="chatIcon">

        </Grid>
      </Grid>
      <Grid className="chatBox2"></Grid>
      <Grid className="chatBox3">
        
        <input type="text" placeholder="Message..."/>
        <Grid className="chatBox3Icons">
          <CiMicrophoneOn  className="chatBox3Icon"/>
          <CiImageOn className="chatBox3Icon"/>
          <MdFavoriteBorder className="chatBox3Icon"/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatRoom;
