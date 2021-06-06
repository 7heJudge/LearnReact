import cls from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import * as React from "react";
import {Redirect} from "react-router-dom";

export const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.dialogs.map(el => (
        <DialogItem id={el.id} key={el.id} name={el.name} image={el.image}/>));
    let messagesElements = props.messagesPage.messages.map(el => (<Message message={el.message} key={el.id}/>));
    let newMessageBody = props.messagesPage.newMessageBody;
    let onSendMessageClick = () => {
        props.onSendMessageClick();
    };
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.onMessageChange(body);
    };

    if (!props.isAuth) return <Redirect to={'/login'} />
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