import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageActionCreator} from "../redux/dialog-reducer";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>)

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateMessage = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageActionCreator(text));
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
                <textarea onChange={updateMessage} value={props.state.newMessage} placeholder='Enter message'/>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;