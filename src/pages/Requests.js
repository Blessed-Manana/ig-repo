import { Box, Grid } from "@mui/material";
import ChatRoom from "../components/chatroom/Chats";
import MessageRequests from "../components/messageRequests/MessageRequests";


const RequestsPage = () => {
    return ( 
        <Box className="messages2">
            <Grid className="userSelection">
               <MessageRequests/> 
            </Grid>
            <Grid className="chatroom">
                <ChatRoom/>
            </Grid>
        </Box>
    );
}
 
export default RequestsPage;