import "./reel.css";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Reels = () => {
  const reels = [
    {
      likes: "613k",
      chats: "3310",
    },
    {
      likes: "61k",
      chats: "30",
    },
    {
      likes: "97",
      chats: "599",
    },
    {
      likes: "100",
      chats: "12",
    },
  ];

  return (
    <div className="reelHolder">
      {reels.map((reel, index) => {
        return (
          <div key={index} className="reel">
            <div className="soundIconVideoContainer">
              <div className="soundIconContainer">
                <VolumeOffIcon id="VolumeOffIcon" />
                <VolumeUpIcon id="VolumeUpIcon" />
              </div>

              <div className="videoContainer">
                <video controls>
                  <source src="Introduction.mp4" type="video/mp4"></source>
                </video>
              </div>
            </div>
            <div className="socialIconsHolder">
              <div className="emptyDivPushDownIcons"></div>
              <div className="allIcons">
                <div className="FavoriteBorderIcon">
                  <a href="/" title="Likes">
                    <FavoriteBorderIcon />
                  </a>
                  <br />
                  <span>{reel.likes}</span>
                </div>
                <div className="ModeCommentOutlinedIcon">
                  <a href="/" title="Comment">
                    <ModeCommentOutlinedIcon />
                  </a>
                  <br />
                  <span>{reel.chats}</span>
                </div>
                <div className="SendOutlinedIcon">
                  <a href="/" title="Direct">
                    <SendOutlinedIcon />
                  </a>
                </div>
                <div className="BookmarkBorderOutlinedIcon">
                  <a href="/" title="Save">
                    <BookmarkBorderOutlinedIcon />
                  </a>
                </div>
                <div className="MoreHorizOutlinedIcon">
                  <a href="/" title="More">
                    <MoreHorizOutlinedIcon />
                  </a>
                </div>
                <div className="mapBox"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reels;
