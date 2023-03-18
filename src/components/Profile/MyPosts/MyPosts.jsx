import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postElements = props.profilePage.posts.map( p => <Post message = {p.message} likesCount = {p.likesCount} key={p.id}/>)

    const onAddPost = ()=> {
        props.addPost();
    }

    const onPostChange = (e)=> {
        let text = e.target.value;
        props.PostChange(text);

    }
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.newPost} placeholder='Enter your post'/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;