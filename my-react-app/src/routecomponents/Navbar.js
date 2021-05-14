import React from 'react'
import {NavLink} from "react-router-dom"

import "./Navbar.css"

export default function Navbar() {
    return (
        <div>
            

            <nav>
                <ul>
                    <li>
                        <NavLink className="link" to="/">Home</NavLink>
                    </li>
                    <li> <NavLink className="link" to="/about">About</NavLink></li>
                    <li> <NavLink className="link" to="/blog">Blog</NavLink></li>
                    <li> <NavLink className="link" to="/contact">Contact</NavLink></li>

                    <li> <NavLink className="link" to="/gamepage">Play a game</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
