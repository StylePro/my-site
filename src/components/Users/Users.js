import React from "react";

let Users = (props)=> {
    debugger
    let totalPages = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    console.log (pages)
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map( p => {
            return <span>{p}</span>
            })}
        </div>
    )
}

export default Users;