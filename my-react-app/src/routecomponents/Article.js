import React from 'react'
import {Link} from "react-router-dom"

export default function Article() {
    return (
        <div>
            <h1>Blogs</h1>

            <ul>
                <li>
                    <Link to="{`${url}/20`}">Blog 1 - React Basics</Link>
                </li>
                <li>
                <Link to="{`${url}/21`}">Blog 2 - React Function components</Link>
                </li>
                <li>
                <Link to="{`${url}/22`}">Blog 3 - React Class components</Link>
                </li>
            </ul>
        </div>
    )
}
