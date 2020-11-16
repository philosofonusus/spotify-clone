import React from "react";
import './SidebarOption.css'
import {useStateValue} from "../StateProvider";

function SidebarOption({title, Icon, playlisto}){
    const [{spotify}, dispatch] = useStateValue()
    return(
        <div className="sidebarOption" onClick={() => {spotify.getPlaylist(playlisto).then((response) =>
            dispatch({
                type: "SET_PLAYLIST",
                playlist: response,
            })
        )}}>
            {Icon && <Icon className='sidebarOption___icon' />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}

        </div>
    )
}
export default SidebarOption