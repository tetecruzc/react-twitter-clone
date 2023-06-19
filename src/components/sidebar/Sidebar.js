import React from "react";
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import TwitterIcon from '@mui/icons-material/Twitter';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import { Button } from "@mui/material";
function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__logo"/>
            <SidebarOption active text="Home" Icon={HouseRoundedIcon} />
            <SidebarOption text="Explore" Icon={SearchRoundedIcon} />
            <SidebarOption text="Notifications" Icon={NotificationsNoneRoundedIcon} />
            <SidebarOption text="Messages" Icon={MailOutlineRoundedIcon} />
            <SidebarOption text="Lists" Icon={MenuRoundedIcon} />
            <SidebarOption text="Bookmarks" Icon={BookmarkBorderRoundedIcon} />
            <SidebarOption text="Verified" Icon={VerifiedRoundedIcon} />
            <SidebarOption text="Profile" Icon={PermIdentityRoundedIcon} />
            <SidebarOption text="More" Icon={PendingOutlinedIcon} />
            <Button variant="outlined" fullWidth className="sidebar__button">Tweet</Button>
        </div>
    )
}

export default Sidebar;