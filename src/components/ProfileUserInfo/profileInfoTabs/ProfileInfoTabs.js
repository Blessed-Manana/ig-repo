import React, { useState, useEffect } from "react";
import "./profileInfoTabs.css";
import GridOnIcon from "@mui/icons-material/GridOn";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BasicPopover from "./popOverTabs/popOverTabs";
// import YourComponent from "./popOverTabs/popOverTabs";
// import UploadButton from "../shareYourFirstPhotoUploader/shareYourFirstPhotoUploader";


const TabComponent = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(1);

  // State to track loading status
  const [loading, setLoading] = useState(false);

  // Content for each tab
  const tabContent = {
    // 1: 'Content for Tab 1',
    // 2: 'Content for Tab 2',
    // 3: 'Content for Tab 3',
  };

  // Simulating an asynchronous operation (e.g., fetching data) when switching tabs
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulating a delay of 1 second, replace with your actual data fetching logic
  }, [activeTab]);

  // Function to handle tab click
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      {/* Tab buttons */}
      <div className="TabsContainer">
        <button
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? "active" : ""}
        >
          <GridOnIcon id="TabsIcons" />
          POSTS
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? "active" : ""}
        >
          <BookmarkBorderIcon id="TabsIcons" />
          SAVED
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={activeTab === 3 ? "active" : ""}
        >
          <AssignmentIndOutlinedIcon id="TabsIcons" />
          TAGGED
        </button>
      </div>

      {/* Tab content with loader */}
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="contentMaineContainer">
            <p>{tabContent[activeTab]}</p>
            {/* Add your specific content for each tab here */}
            {activeTab === 1 && (
              <div className="content1Cotainer">
                <div className="content1">
                  <div className="content1ImgContainer">
                    {/* <AssignmentIndOutlinedIcon id="content1Icon" /> */}
                    <BasicPopover/>
                  </div>
                  <p>Photos of you</p>
                  <span>
                    When people tag you in photos, they'll appear here.
                  </span>
                  <div id="shareYourFirstPost">
                    <button>Share your first photo</button>
                    {/* <UploadButton id="shareYourFirstPostIcon"/> */}
                    {/* <YourComponent/> */}
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="content2Container">
                <div className="paraNewCollection">
                  <p>Only you can see what you've saved</p>
                  <div className="newCollectionBtnContainer">
                    <button>+ New Collection</button>
                  </div>
                </div>
                <div className="saveContainer">
                  <div className="centeredSaveContainer">
                    <div className="content1ImgContainer">
                      <BookmarkBorderIcon id="content1Icon" />
                    </div>
                    <p>Save</p>
                    <span>
                      Save photos and videos that you want to see again. No one
                      is notified, and only you can see what you've saved.
                    </span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 3 && <div>
              <div className="content2Container">
                
                <div className="saveContainer">
                  <div className="centeredSaveContainer">
                    <div className="content1ImgContainer">
                      <AssignmentIndIcon id="content1Icon" />
                    </div>
                    <p>Photos of you</p>
                    <span>
                    When people tag you in photos, they'll appear here.
                    </span>
                  </div>
                </div>
              </div>
              </div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
