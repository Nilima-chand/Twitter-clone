import React from 'react'
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarOptions from './SidebarOptions';
import { Button } from '@material-ui/core';


function Sidebar() {
  return (
    <div  className='sidebar'>
    

          <TwitterIcon 
          className='sidebar_twitterIcon'
          />

          <SidebarOptions
          active
          Icon={HomeIcon}
          text="Home"
          />

          <SidebarOptions 
          Icon={SearchIcon}
          text="Search"
          />

          <SidebarOptions 
          Icon={NotificationsIcon}
          text="Notification"
          />

          <SidebarOptions 
          Icon={MailOutlineIcon}
          text="Message"
          />

          <SidebarOptions 
          Icon={BookmarkIcon}
          text="Bookmark"
          />

          <SidebarOptions 
           Icon={ListAltIcon}
          text="List"
          />

          <SidebarOptions 
           Icon={PermIdentityIcon}
          text="Profile"
          />

          <SidebarOptions
           Icon={MoreHorizIcon}
          text="More"
          />
        
          <Button className='sidebar_tweet' variant="outlined">Tweet</Button>
      
    </div>
  )
}

export default Sidebar
