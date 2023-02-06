import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs
        .map( d => <DialogItem name={d.name} id={d.id}/> )

    let messagesElements = props.state.messages
        .map (m => <Message message={m.message}/>)

    let addMessage =()=> {
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    let updateMessage =(e)=> {
        let text = e.target.value;
        props.dispatch({type: 'UPDATE-NEW-DIALOG-MESSAGE', newText: text})
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <textarea onChange={updateMessage} value={props.state.newMessage}/>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;