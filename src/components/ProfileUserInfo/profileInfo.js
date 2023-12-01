import "./profileInfo.css"
import TabComponent from "./profileInfoTabs/ProfileInfoTabs";

import ProfilePictureUploader from "./profilePictureUploader/profilePictureUploader";

import Brightness5Icon from '@mui/icons-material/Brightness5';
import ProfileInfoFooter from "./profileinfoFooter/profileinfoFooter";





const ProfileInfo = () => {
    return ( 
        <div className="profileInfoContainer">
            <div className="profePictureEditProfileVeiwArciveCotainer">
                <div className="profilepictureUploaderContainer">
                    <div className="profilePicture">
                        {/* <img src="profilePicture.jpg" alt="profilePicture"/> */}
                        <ProfilePictureUploader/>
                    </div>
                </div>
                <div className="EditProfileVeiwArciveContainer">
                    <div className="editVeiw">
                        <h2>johnnyoka5</h2>
                        <a href="/">Edit Profile</a>
                        <a href="/">View Archive</a>
                        <div id="optionsIconContainer">
                            <Brightness5Icon/>
                        </div>
                    </div>
                    <div className="postsafolowersFollowing">
                        <p><span>0</span>  posts</p>
                        <p id="followers"><span>18</span>  followers</p>
                        <p id="following"><span>66</span>  following</p>
                    </div>
                    <p className="profileUserName">John Nyoka</p>
                </div>
            </div>
            <di className="profileTabsContainer">
                {/* <CustomTabPanel/> */}
                <TabComponent/>
               
            </di>

            <ProfileInfoFooter/>
        </div>
     );
}
 
export default ProfileInfo;