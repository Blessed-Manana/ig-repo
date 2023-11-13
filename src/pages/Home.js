import Suggestions from "../components/suggestions/Suggestions";

import Stories from "../components/Stories/Stories";
import Feeds from "../components/feeds/feeds";

const Home = () => {
    return ( 
        <div className="home">
            <div className="mainSide">
                <Stories/>
                <Feeds/>
            </div>
            <div className="sugSide">
                <Suggestions/>
            </div>
        </div>
     );
}

export default Home;