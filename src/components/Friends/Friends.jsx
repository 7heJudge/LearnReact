import cls from './Friends.module.css';
import {FriendItem} from "./FriendItem/FriendItem";

export const Friends = (props) => {
    let friendsElements = props.friendsPage.friends.map(el => (<FriendItem id={el.id} name={el.name} image={el.image}/>));
      return (
        <div className={cls.friends}>
            <div className={cls.friendsItems}>{friendsElements}</div>
        </div>
    );
};