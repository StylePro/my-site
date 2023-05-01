import React from 'react'
import avatar from '../common/images/avatar.png'
import s from './Users.module.css'

let Users = (props) => {
    let countPage = Math.ceil(props.totalUsersCount / props.pageSize);
    debugger
    let pages = [];
    for (let i = 1; i<= countPage; i++) {
        pages.push(i);
    }
    return (
        <div>
            all users: {props.totalUsersCount}
            <div>
                {pages.map(p => {
                    return <span onClick={(event)=> {props.onPageChanged(p)}} className={props.currentPage === p && s.selectedPages}>{p}</span>
                })
                }
            </div>
            {props.users.map(u => <div key={u.id}>
                <div className={s.avatar}>
                    <img src={u.photos.small != null ? u.photos.small : avatar}/>
                </div>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.followed
                    ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={()=> {props.follow(u.id)}}>Follow</button>
                    }

                </div>
            </div>)}
        </div>
    )
}
export default Users;