import React from "react"
import DrawerToggleButton from "../components/SideDrawer/DrawerToggleButton"
import Navbar from './Navbar'

const Header = ({ children, data }) => {
  return (
    <div className="header-container">
      <header className="header">

        <div className="header-video-container"><video loop="1" width="100%" height="250" controls="" autoPlay autoplay="1" name="media" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/Sequenz-03_9.mp4" type="video/mp4" ></video></div>
        <Navbar data={data} />
      </header>
      <header className="header-mobile">
        <div className="header-mobile-container">
          <div className="header-mobile-column-left"></div>
          <div className="header-mobile-column-middle"><img className="header-mobile-logo" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/bipolar_logo.svg" alt=""></img></div>
          <div className="header-mobile-column-right"><DrawerToggleButton /></div>
        </div>
      </header>
      {children}
    </div>
  )

}

export default Header

