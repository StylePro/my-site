import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postElements = props.posts.map( p => <Post message = {p.message} likesCount = {p.likesCount}/>)

    const addPost = ()=> {
        props.dispatch({ type: 'ADD-POST'})
    }

    const onPostChange = (e)=> {
        let text = e.target.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);

    }
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPost}/>
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