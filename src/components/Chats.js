import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

function Chats() {
  const history = useHistory();
  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Textelope</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="51b18539-6fc9-4c29-9827-5d6ddd779582"
        userName="."
        userSecret="."
      />
    </div>
  );
}

export default Chats;
