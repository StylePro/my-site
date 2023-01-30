import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postElements = props.posts.map( p => <Post message = {p.message} likesCount = {p.likesCount}/>)
    const addPost = ()=> {
        return (
            alert('Hi')
        )
    }
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea value={props.newPost}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}


export default MyPosts;