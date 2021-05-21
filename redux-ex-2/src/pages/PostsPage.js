import React, { useEffect } from 'react'
import {connect} from "react-redux"

import {fetchPosts} from "../actions/postsActions"

import {Post} from "../components/Post"

export default function PostsPage(loading, posts, hasErrors, dispatch) {

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])


    const renderPosts =() => {
        if (loading) {
            return <p>Loading</p>
        }

        else if (hasErrors) {
            return <p>Unable to display posts</p>
        }

        return posts.map((post) => <Post key={post.id} post={post}/>)
    }


    return (
        <div>
            <section>
                <h1>Posts</h1>


                {renderPosts}
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
})

connect(mapStateToProps)(PostsPage)
