import React from 'react'
import { useParams } from 'react-router'
import img1 from "../components/images/img1.jpg"

export default function BlogComponent() {

    const {blogname} = useParams();
    console.log(blogname)
    return (
        <div>
            <h2>{blogname}</h2>
            <img src={img1} alt="" />
        </div>
    )
}
