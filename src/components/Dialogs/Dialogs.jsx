import cls from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import * as React from "react";

export const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.dialogs.map(el => (<DialogItem id={el.id} name={el.name} image={el.image}/>));
    let messagesElements = props.messagesPage.messages.map(el => (<Message message={el.message}/>));
    let newMessage = React.createRef();
    let addMessage = () => {
        props.addMessage();
    };
    let onMessageChange = () => {
        debugger
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cls.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} placeholder='Write here...' ref={newMessage} value={props.messagesPage.newMessageText}/>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
};