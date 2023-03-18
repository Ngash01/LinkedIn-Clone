import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import { InputOption } from "./InputOption";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import ImageIcon from '@mui/icons-material/Image';
import { Post } from "./Post";

export const Feed = ()=>{
  return <div className="Feed">
    <div className="FeedInputContainer">
      <div className="FeedInput">
        <CreateIcon/>
        <form>
          <input type="text" placeholder="Start a post"/>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="feed__inputOptions">
        <InputOption Icon={ImageIcon} Title="Photo" color="green"/>
        <InputOption Icon={SmartDisplayIcon} Title="Video" color="purple"/>
        <InputOption Icon={EventNoteIcon} Title="Event" color="brown"/>
        <InputOption Icon={CalendarViewDayIcon} Title="WriteArticle" color="brown"/>

      </div>
    </div> 
    <Post/>

  </div>
}


