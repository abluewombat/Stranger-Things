import React from "react";
import './App.css'
import {useHistory} from 'react-router-dom'

const Header = (props) => {
    let history = useHistory()
    return(
        <ul id="navbar">
        {props.username ? <div>Logged in as: {props.username}</div> : null}
        </ul>
    )
}
export default Header