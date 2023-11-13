import Stories from "../components/Stories/Stories";
import Feeds from "../components/feeds/feeds";

const Home = () => {
    return ( 
        <div className="home">
            <Stories/>
            <Feeds/>
        </div>
     );
}
 
export default Home;