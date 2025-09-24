import "./App.css";
import ParlantChatbox from "parlant-chat-react";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ParlantChatbox server="http://172.16.0.25:8800" agentId="0xoHu3IWP4" />
      </div>
    </div>
  );
}

export default App;
