import React from 'react'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import './SideBar.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import logo from '../logo.png'
import SidebarOption from "./SidebarOption";
import {useStateValue} from "../StateProvider";

const SideBar = () => {
    const [{playlists}] = useStateValue()
    return(

        <div className='sidebar'>
            <img className='sidebar___logo' src={logo} alt='logo'/>
            <div className='sidebar__options'>
            <SidebarOption Icon={HomeIcon} title='Home'/>
            <SidebarOption Icon={SearchIcon} title='Search'/>
            <SidebarOption Icon={LibraryBooksIcon} title='Library'/>
            </div>
            <strong className='sidebar___title'>PLAYLISTS</strong>
            <hr />
            {
                playlists?.items?.map(playlist => (
                <SidebarOption key={playlist.name} title={playlist.name} playlisto={playlist.id}/>
                ))
            }

        </div>
    )
}
export default SideBar