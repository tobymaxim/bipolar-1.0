import React from "react"
import DrawerToggleButton from "../components/SideDrawer/DrawerToggleButton"
import Navbar from './Navbar'

/*import SideDrawer from "./SideDrawer/SideDrawer"
import Backdrop from "./Backdrop/Backdrop"

<SideDrawer />
<Backdrop />
*/



export default ({ children }) => (
  <div className="header-container">
    <header className="header">
      <video loop="1" width="100%" controls="" autoplay="" name="media" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/bipolar_header.mp4" type="video/mp4"></video>

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


