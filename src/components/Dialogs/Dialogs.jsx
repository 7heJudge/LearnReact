import cls from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import * as React from "react";
import {
    updateNewMessageBodyCreator,
    sendMessageCreator
} from "../../redux/messages-reducer";

export const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.dialogs.map(el => (
        <DialogItem id={el.id} name={el.name} image={el.image}/>));
    let messagesElements = props.messagesPage.messages.map(el => (<Message message={el.message}/>));
    let newMessageBody = props.messagesPage.newMessageBody;
    let onSendMessageClick = () => {
        props.onSendMessageClick();
    };
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.onMessageChange(body);
    };

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cls.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onMessageChange} placeholder='Write here...'
                                   value={newMessageBody}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};