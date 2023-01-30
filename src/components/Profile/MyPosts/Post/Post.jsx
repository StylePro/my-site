import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://coolsen.ru/wp-content/uploads/2021/11/153-20211126_191435.jpg'/>
                {props.message}
                <div>
                    <span>Like: </span> {props.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post;