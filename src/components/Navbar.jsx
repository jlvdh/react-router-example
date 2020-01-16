import React from 'react'
import { NavLink } from 'react-router-dom';

const red = {
    color: "red"
}

export default function Navbar() {
    return (
        <ul>
            <li><NavLink exact to='/' activeStyle={red}>Home</NavLink></li>
            <li><NavLink to='/class' activeStyle={red}>The Ironhack Class</NavLink></li>
            <li><NavLink to='/cat/sam?width=400&height=400' activeStyle={red}>cats</NavLink></li>
        </ul>
    )
}
