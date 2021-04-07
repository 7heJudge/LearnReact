import cls from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={cls.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={cls.active}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={cls.message}>{props.message}</div>
    );
};

export const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Yan-kaban'},
        {id: 2, name: 'Dima-kaban'},
        {id: 3, name: 'Misha-kaban'},
        {id: 4, name: 'Kura-kaban'}
    ];

    let messages = [
        {id: 1, message: 'Hey!'},
        {id: 2, message: 'Yooooo!'},
        {id: 3, message: 'Whaaats up?!'}
    ];
    let dialogsElements = dialogs.map(el => (<DialogItem id={el.id} name={el.name}/>));
    let messagesElements = messages.map(el => (<Message message={el.message}/>));

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