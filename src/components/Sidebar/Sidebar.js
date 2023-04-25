import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@mui/icons-material";
import SidebarRow from "../SidebarRow/SidebarRow";
const Sidebar = () => {
  const user = useSelector((state) => state.userData.user);

  return (
    <div className="sidebar">
      <SidebarRow title={user.displayName} src={user.photoURL} />
      <SidebarRow title="covid-19 Information center" Icon={LocalHospital} />
      <SidebarRow title="Pages" Icon={EmojiFlags} />
      <SidebarRow title="Friends" Icon={People} />
      <SidebarRow title="Messages" Icon={Chat} />
      <SidebarRow title="Market Place" Icon={Storefront} />
      <SidebarRow title="Videos" Icon={VideoLibrary} />
      <SidebarRow title="More Items" Icon={ExpandMoreOutlined} />
    </div>
  );
};

export default Sidebar;
