import { Avatar } from "@mui/material"
import "./HeaderOption.css"

export const HeaderOption = ({avatar, Icon, Title})=>{
  return <div className="HeaderOption">
    {Icon && <Icon className="HeaderOption__Icon"/>}
    <h3 className="HeaderOption__title">{Title}</h3>
    {avatar && <Avatar src={avatar}/>}
  </div>
}

