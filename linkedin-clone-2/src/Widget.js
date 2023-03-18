import { Avatar } from "@mui/material"
import "./Widget.css"

export const Widget = ()=>{
  return <div>

   <div className="widget">
    <h3>Add to your feed</h3>
    <div className="contactPerson">
      <Avatar src="https://media.licdn.com/dms/image/C5603AQHT1xuJl2N49A/profile-displayphoto-shrink_100_100/0/1517602245152?e=1684368000&v=beta&t=hnfJ_TwZEevGIcLBJRjwr6bnN7odO8I_SITSUNUo9pw"/>
      <div className="contactPerson_info">
        <h3>Arthur Mwai</h3>
        <p>County Operations Manager - Kenya</p>
        <p>Branch</p>
        <div className="contactPerson_info_follow">
          <p className="plus">+</p>
          <p className="contactP">Follow</p>
        </div>
      </div>
    </div>

    <div className="contactPerson">
      <Avatar src="https://media.licdn.com/dms/image/C5603AQFhgPJVZpBy2w/profile-displayphoto-shrink_100_100/0/1660389259071?e=1684368000&v=beta&t=iz5AGq4a4OL6lNat-s2ygKTBz6WzmF1NuWX6Kha1PqE"/>
      <div className="contactPerson_info">
        <h3>Governor Susan Kihika</h3>
        <p>NAKURU GOVERNOR</p>
        <p></p>
        <div className="contactPerson_info_follow">
          <p className="plus">+</p>
          <p className="contactP">Follow</p>
        </div>
      </div>
    </div>

    <div className="contactPerson">
      <Avatar src="https://media.licdn.com/dms/image/C4D03AQHCXbtbh-zIYA/profile-displayphoto-shrink_100_100/0/1646676485271?e=1684368000&v=beta&t=uALQa-WqoF6Z7-35h_XCzOcbBkCE_xJzNfTuBOBMFY8"/>
      <div className="contactPerson_info">
        <h3>Nadia Ahmed</h3>
        <p>Communication Strategist & Inspirational Speaker</p>
        <p></p>
        <div className="contactPerson_info_follow">
          <p className="plus">+</p>
          <p className="contactP">Follow</p>
        </div>
      </div>
    </div>

  <div className="Footer">
    <p>About</p>
    <p>Accessibility</p>
    <p>Help Center</p>
    </div>

    </div>
  </div>
  
}

