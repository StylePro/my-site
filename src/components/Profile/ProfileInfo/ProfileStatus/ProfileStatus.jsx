import {useState} from "react";

function ProfileStatus() {
    let [status, setStatus] = useState('Hello mens');
    let [editMode, setEditMode] = useState(false)
    return (
        <div>
            {!editMode &&
            <div>
                <span
                onDoubleClick={()=> {setEditMode(true)}}
                >{status}</span>
            </div>
            }
            {editMode &&
                <div>
                    <input
                        type="text"
                        autoFocus={true}
                        value={status}
                        onBlur={()=> {setEditMode(false)}}
                        onChange={(event)=> {setStatus(event.currentTarget.value)}}

                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatus;
