import "./feeds.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const Feeds = () => {
  const feeds = [
    {
      imgSmall: "ImgSmall",
      spanName: "spanName",
      spanDot: "spanDot",
      spanTime: "18 h",
      svg3Dots: "svg3Dots",

      imgBig: "imgBig",

      svgHeart: "svgHeart",
      svgComment: "svgComment",
      svgSharePost: "svgSharePost",
      svgSave: "svgSave",

      spanLike: "spanLike",
      linkName: "linkName",
      spanHeart: "spanHeart",

      smileEmoji: "smileEmoji",
    },
    {
      imgSmall: "ImgSmall",
      spanName: "spanName",
      spanDot: "spanDot",
      spanTime: "18 h",
      svg3Dots: "svg3Dots",

      imgBig: "imgBig",

      svgHeart: "svgHeart",
      svgComment: "svgComment",
      svgSharePost: "svgSharePost",
      svgSave: "svgSave",

      spanLike: "spanLike",
      linkName: "linkName",
      spanHeart: "spanHeart",

      smileEmoji: "smileEmoji",
    },
  ];

  return (
    <div className="feedHolder">
      {feeds.map((feed, index) => {
        return (
          <div key={index} className="feed">
            <div className="topFeeds">
              <div className="topFeedsRight">
                <div id="imgSmall"></div>
                <span id="spanName">{feed.spanName}</span>
                <span className="spanDot">
                  {" "}
                  <FiberManualRecordIcon id="dot" />{" "}
                </span>
                <span id="spanTime"> {feed.spanTime} </span>
              </div>
              <div className="topFeedsLeft">
                <div id="svg3Dots">
                  {" "}
                  <MoreHorizIcon />{" "}
                </div>
              </div>
            </div>
            <div className="imgBig"></div>
            <div className="iconDiv">
              <div className="iconDivLeft">
                <div className="svgHeart" title="Like">
                  {" "}
                  <FavoriteBorderIcon />{" "}
                </div>
                <div className="svgComment" title="Comment">
                  {" "}
                  <ChatBubbleOutlineIcon />{" "}
                </div>
                <div className="svgSharePost" title="Share Post">
                  {" "}
                  <SendIcon />{" "}
                </div>
              </div>
              <div className="iconDivRight">
                <div className="svgSave" title="Save">
                  {" "}
                  <BookmarkBorderIcon />{" "}
                </div>
              </div>
            </div>
            <div className="spanLike"> {feed.spanLike} </div>
            <div className="linkName">
              <a href="/" id="link">
                {" "}
                {feed.linkName}{" "}
              </a>
              <div id="heart">
                {" "}
                <FavoriteIcon id="heart" />{" "}
              </div>
            </div>
            <div className="textArea">
              <textarea rows="2" cols="50" placeholder="Add a comment..." />
              <SentimentSatisfiedAltIcon id="smileFace" title="Emoji" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feeds;
