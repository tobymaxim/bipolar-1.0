import React from "react"
import DrawerToggleButton from "../components/SideDrawer/DrawerToggleButton"
import Navbar from './Navbar'

const Header = ({ children, data }) => {
  return (
    <div className="header-container">
      <header className="header">
        <video loop="1" width="100%" controls="" autoPlay="" name="media" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/bipolar_header.mp4" type="video/mp4" ></video>
        <Navbar data={data} />
      </header>
      <header className="header-mobile">
        <div className="header-mobile-container">
          <div className="header-mobile-column-left">asd</div>
          <div className="header-mobile-column-middle"><img className="header-mobile-logo" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/bipolar_logo.svg" alt=""></img></div>
          <div className="header-mobile-column-right"><DrawerToggleButton /></div>
        </div>
      </header>
      {children}
    </div>
  )

}

export default Header

