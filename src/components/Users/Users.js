import React from 'react'
import avatar from '../common/images/avatar.png'
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import {UsersAPI as usersAPI} from "../api/api";
import {toggleFollowingProgress} from "../redux/users-reducer";

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
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.toggleFollowingProgress(true, u.id)
                            usersAPI.unfollowUser(u).then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id)
                            })
                        }}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                            usersAPI.followUser(u).then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id)
                            })
                        }}>Follow</button>
                    }
                </div>
            </div>)}
        </div>
    )
}
export default Users;