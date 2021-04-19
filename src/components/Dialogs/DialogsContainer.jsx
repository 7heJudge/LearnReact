import cls from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import * as React from "react";
import {
    updateNewMessageBodyCreator,
    sendMessageCreator
} from "../../redux/messages-reducer";
import {Dialogs} from "./Dialogs";

export const DialogsContainer = (props) => {
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action);
    };

    return (<Dialogs onSendMessageClick={onSendMessageClick}
                     onMessageChange={onMessageChange} messagesPage={props.store.getState().messagesPage}/>
    );
};