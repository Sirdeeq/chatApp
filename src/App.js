import { ChatEngine } from "react-chat-engine"
import ChatFeed from "./components/ChatFeed"

function App() {
  return (
    <>
    <ChatEngine 
    height="100vh"
    projectID="526b385c-4537-47a0-b450-54c634186791"
    userName="ahmad"
    userSecret="ahmad"
    renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps}/>}
    />
    </>
  );
}

export default App;
