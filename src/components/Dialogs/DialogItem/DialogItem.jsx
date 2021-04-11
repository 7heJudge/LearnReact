import cls from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
    return (
        <div className={cls.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={cls.active}><img src={props.image}/>{props.name}</NavLink>
        </div>
    );
};
