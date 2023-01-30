import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";






const MyPosts = (props) => {
    console.log(props)
    const postElements = props.posts.map( p => <Post message = {p.message} likesCount = {p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}


export default MyPosts;