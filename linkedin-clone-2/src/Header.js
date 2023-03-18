import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import { HeaderOption } from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Header = ()=>{
  return <div className="header">
    <div className="header__left">
      <img height="40px" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>

      <div className="header__search">
      <SearchIcon/>
      <input type="text" placeholder="Search"/>
      </div>
    </div>

    <div className="header__right">
      <HeaderOption Icon={HomeIcon} Title="Home"/>
      <HeaderOption Icon={SupervisorAccountIcon} Title="My Network"/>
      <HeaderOption Icon={BusinessCenterIcon} Title="Jobs"/>
      <HeaderOption Icon={ChatIcon} Title="Messages"/>
      <HeaderOption Icon={NotificationsIcon} Title="Notifications"/>
      <HeaderOption avatar="https://i.pinimg.com/236x/c4/b3/d1/c4b3d1c1184bb60506cf77cb6e3c03d8.jpg"/>
       </div>



   
  </div>
}

