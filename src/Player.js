import React from "react"
import './Player.css'
import SideBar from './PlayerComponents/SideBar'
import Footer from "./PlayerComponents/Footer";
import Body from "./PlayerComponents/Body";



const Player = () => {
    return(
        <div className='player'>
            <div className='player__body'>
               <SideBar />
               <Body />
            </div>
            <Footer />
        </div>
    )
}
export default Player;