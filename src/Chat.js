import "./Chat.css";
import { useState, useEffect } from "react";
import { BsSearch, BsFillMicFill } from "react-icons/bs";
import { GrMoreVertical } from "react-icons/gr";
import { IoIosAttach } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";

export default function Chat() {
  const [dice, setDice] = useState("");
  const [input, setInput] = useState();
  useEffect(() => {
    setDice(Math.floor(Math.random() * 500));
  }, []);

  const SendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <img src={`https://avatars.dicebear.com/api/personas/${dice}.svg`} />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <button>
            <BsSearch />
          </button>
          <button>
            <IoIosAttach />
          </button>
          <button>
            <GrMoreVertical />
          </button>
        </div>
      </div>
      {/* chat chat_header */}
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_receive"}`}>
          <span className="chat_name">seemachal</span>hello
          <span className="chat_time">3:25am</span>
        </p>
      </div>
      <div className="chat_footer">
        <MdOutlineEmojiEmotions className="emoji" />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button onClick={SendMessage} type="submit">
            send message
          </button>
        </form>
        <BsFillMicFill className="mic" />
      </div>
    </div>
  );
}
