import cls from './../Friends.module.css';
import {NavLink} from "react-router-dom";

export const FriendItem = (props) => {
    return (
        <div className={cls.friend}>
            <NavLink to={`/friends/${props.id}`} activeClassName={cls.active}><img src={props.image}/>{props.name}</NavLink>
        </div>
    );
};