import React from 'react'
import {loginUri} from './spotify'
import logo from './logo.png'
import './Login.css'

function Login(){
    return(
        <div className='login'>
            <img src={logo} alt='logo'/>
            <a  href={loginUri}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}
export default Login