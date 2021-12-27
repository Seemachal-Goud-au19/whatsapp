import "./SidebarChat.css";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from "react";

export default function SidebarChat({ AddnewChat }) {
  const [dice, setDice] = useState("");
  useEffect(() => {
    setDice(Math.floor(Math.random() * 500));
  }, []);

  const CreateChat = () => {
    const RoomName=prompt("Enter something");
    if(RoomName){
      
    }
  };
  return (
    <>
      {!AddnewChat ? (
        <div className="sidebarChat">
          <img src={`https://avatars.dicebear.com/api/personas/${dice}.svg`} />
          <div className="sidebarChat_info">
            <h2>Room name</h2>
            <p>last message...</p>
          </div>
        </div>
      ) : (
        <div onClick={CreateChat} className="sidebarChat">
          <h2>Add new Chat</h2>
        </div>
      )}
    </>
  );
}
