import React from "react"
import { Link } from "gatsby"
import DrawerToggleButton from "../components/SideDrawer/DrawerToggleButton"

/*import SideDrawer from "./SideDrawer/SideDrawer"
import Backdrop from "./Backdrop/Backdrop"

<SideDrawer />
<Backdrop />
*/


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div className="header-container">
    <header className="header">
     <video loop ="1" width="100%" controls="" autoplay="" name="media" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/bipolar_header.mp4" type="video/mp4"></video>
     <div className="menu-container">
          <ul className="menu-list">
            <ListLink to="/"><span className="menu-link">News</span></ListLink>
            <ListLink to="/about/"><span className="menu-link">About</span></ListLink>
            <ListLink to="/label/"><span className="menu-link">Label</span></ListLink>
            <ListLink to="/artists/"><span className="menu-link">Artists</span></ListLink>
            <ListLink to="/art/"><span className="menu-link">Art</span></ListLink>
            <ListLink to="/podcasts/"><span className="menu-link">Podcasts</span></ListLink>
            <ListLink to="/events/"><span className="menu-link">Events</span></ListLink>
            <ListLink to="/videos/"><span className="menu-link">Videos</span></ListLink>
            <ListLink to="/booking/"><span className="menu-link">Booking</span></ListLink>
          </ul>
      </div>
    </header>
    <header className="header-mobile">
      <div className="header-mobile-container">
        <div class="header-mobile-column-left">asd</div>
        <div class="header-mobile-column-middle"><img className="header-mobile-logo" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/bipolar_logo.svg"></img></div>
        <div class="header-mobile-column-right"><DrawerToggleButton /></div>


      </div>
    </header>  
  {children}
  </div>
)

