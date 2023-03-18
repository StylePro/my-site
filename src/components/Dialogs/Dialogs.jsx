import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key = {d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key = {m.id}/>)

    let onAddMessage = () => {
        props.addMessage();
    }
    let onUpdateMessage = (e) => {
        let text = e.target.value;
        props.updateMessage(text);
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
                <textarea onChange={onUpdateMessage} value={props.dialogsPage.newMessage} placeholder='Enter message'/>
                <div>
                    <button onClick={onAddMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;