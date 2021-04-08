import cls from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(el => (<DialogItem id={el.id} name={el.name}/>));
    let messagesElements = props.messages.map(el => (<Message message={el.message}/>));

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cls.messages}>
                {messagesElements}
            </div>
        </div>
    );
};