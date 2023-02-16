import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/profile-reducer";



const MyPosts = (props) => {
    const postElements = props.posts.map( p => <Post message = {p.message} likesCount = {p.likesCount}/>)

    const addPost = ()=> {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (e)=> {
        let text = e.target.value;
        let action = onPostChangeActionCreator(text);
        props.dispatch(action);

    }
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPost} placeholder='Enter your post'/>
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