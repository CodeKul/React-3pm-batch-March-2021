import React from 'react'

export default function Post({post}) {
    return (
        <div>
            <article>
                <h2>{post.title}</h2>
                <p>{post.body.substring(0,100)}</p>
            </article>
        </div>
    )
}
