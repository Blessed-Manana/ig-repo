import "./profileinfoFooter.css"

const ProfileInfoFooter = () => {
    return ( 
        <div className="ProfileInfoFooterContainer">
            <div className="footerTopSpansContainer">
                <a href="/">Meta</a>
                <a href="/">About</a>
                <a href="/">Blog</a>
                <a href="/">Jobs</a>
                <a href="/">Help</a>
                <a href="/">API</a>
                <a href="/">Privacy</a>
                <a href="/">Terms</a>
                <a href="/">Locations</a>
                <a href="/">Instagram Life</a>
                <a href="/">Threads</a>
                <a href="/">Contact uploading and non users</a>
                <a href="/">Meta Verified</a>
                
               
            </div>
            <div className="footerBottomSpansContainer">
                <select>
                    <option>English (UK)</option>
                    <option>John</option>
                    <option>Luc</option>
                    <option>Nyoka</option>
                    <option>Kabika</option>
                </select>
                <p>© 2023 Instagram from Meta</p>
            </div>
        </div>
     );
}
 
export default ProfileInfoFooter;