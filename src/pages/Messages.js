import UserSelection from "../components/userSelection/UserSelection";
import ChatRoom from "../components/chatroom/Chats";

const Messages = () => {
    return ( 
        <div className="messages">
            <div className="userSelection">
                <UserSelection/>
            </div>
            <div className="chatroom">
                <ChatRoom/>
            </div>
        </div>
     );
}
 
export default Messages;