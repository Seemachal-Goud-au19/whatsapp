import "./Sidebar.css";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDonutLarge } from "react-icons/md";
import { BsFillChatLeftTextFill, BsSearch } from "react-icons/bs";
import { GrMoreVertical } from "react-icons/gr";
import SidebarChat from "./SidebarChat";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <CgProfile className="profile" />
        <div className="sidebar_headerRight">
          <button>
          
            <MdOutlineDonutLarge />
          </button>
          <button>
            <BsFillChatLeftTextFill />
          </button>
          <button>
            <GrMoreVertical />
          </button>
        </div>
      </div>
      {/* sidebar search */}
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <BsSearch className="searchicon" />
          <input type="text" placeholder="Sarch or Start chat" />
        </div>
      </div>
      <div className="sidebar_chats">
          <SidebarChat AddnewChat/>
          <SidebarChat/>
          <SidebarChat/>
         
      </div>
    </div>
  );
};

export default Sidebar;
