import {useEffect, useState} from "react";

const ProfileStatus =(props)=> {
    let [title, setTitle] = useState(props.status);
    console.log(title)
    let [editMode, setEditMode] = useState(false)
    useEffect(()=> {
        setTitle(props.status)
    }, [props.status])

    return (
        <div>
            {!editMode &&
            <div>
                <span
                onDoubleClick={()=> {setEditMode(true)}}
                >{title}</span>
            </div>}
            {editMode &&
            <div>
                <input
                value={title}
                autoFocus={true}
                onBlur={()=> {setEditMode(false)}}
                onChange={(event)=> {setTitle(event.currentTarget.value)}}
                />
            </div>}
        </div>
    )

}

export default ProfileStatus;
