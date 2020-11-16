import React from "react";
import './BodyHeader.css'
import {useStateValue} from "../StateProvider";
import {Search} from "@material-ui/icons";
import {Avatar} from "@material-ui/core";

function BodyHeader (){
    const [{ user }] = useStateValue()
    return(
        <header className='body-header'>
            <div className='body-header__left'>
                <Search />
                <input placeholder='Search for Artists, Songs, Albums' type='text'/>
            </div>
            <div className='body-header__right'>
                <Avatar src={user?.images[0]?.url} alt={user?.images[0]?.url}/>
                <h4>{user?.display_name}</h4>
            </div>
        </header>
    )
}
export default BodyHeader