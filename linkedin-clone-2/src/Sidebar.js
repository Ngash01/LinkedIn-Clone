import { Avatar } from "@mui/material"
import "./Sidebar.css"

export const Sidebar = ()=>{


  const recentItem = (topic)=>{
    return(
      <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
    )
  }

  return <div className="Sidebar">
    <div className="sidebar__top">
      <img width="100%" src="data:image/jpeg;base64,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" alt=""/>
      <Avatar className="sidebar__avartar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vpCbUMAdDqY-aq4K0EYse-q9205Gte32ww&usqp=CAU"/>
      <h2>Alice Williams</h2>
      <h4>aliciaWillams22@gmail.com</h4>
    </div>
    <div className="sidebar__stats">
      <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className="sidebar__statNumber">2,643</p>
      </div>

      <div className="sidebar__stat">
        <p>Views on post</p>
        <p className="sidebar__statNumber">2,360</p>
      </div>
    </div>
    <div className="sidebar__bottom">
      <p>Recent</p>
      {recentItem("reactjs")}
      {recentItem("programming")}
      {recentItem("softwareengineering")}
      {recentItem("design")}
      {recentItem("developer")}


    </div>
  </div>
}

