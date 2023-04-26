import React from 'react'


let Users = (props)=> {
    debugger;
    return (
        <div>
            <span>
                <div>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <div>
                    {props.users.map(u => <div key={u.id}>
                        <div>
                            {props.users.name}
                        </div>
                    </div>)}
                </div>
            </span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Users;