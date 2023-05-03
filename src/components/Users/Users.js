import React from 'react'
import avatar from '../common/images/avatar.png'
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let countPage = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }
    return (
        <div>
            all users: {props.totalUsersCount}
            <div>
                {pages.map(p => {
                    return <span onClick={(event) => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p && s.selectedPages}>{p}</span>
                })
                }
            </div>
            {props.users.map(u => <div key={u.id}>
                <NavLink to={'/profile/' + u.id}>
                    <div className={s.avatar}>
                        <img src={u.photos.small != null ? u.photos.small : avatar}/>
                    </div>
                </NavLink>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true,
                                headers: {"API-KEY": "61ad3746-7627-4c8c-b7d8-603828dd61ca"}}).then(responce => {
                                if (responce.data.resultCode === 0) {
                                    {props.unfollow(u.id)}
                                }
                            })
                        }}>Unfollow</button>

                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
                                headers: {"API-KEY": "61ad3746-7627-4c8c-b7d8-603828dd61ca"}}).then(responce => {
                                if (responce.data.resultCode === 0) {
                                    {props.follow(u.id)}
                                }
                            })
                        }}>Follow</button>
                    }
                </div>
            </div>)}
        </div>
    )
}
export default Users;