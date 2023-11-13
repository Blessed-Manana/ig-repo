import Suggestions from "../components/suggestions/Suggestions";

import Stories from "../components/Stories/Stories";
import Feeds from "../components/feeds/feeds";

const Home = () => {
    return ( 
        <div className="home">
            <Suggestions/>
            <Stories/>
            <Feeds/>
        </div>
     );
}

export default Home;