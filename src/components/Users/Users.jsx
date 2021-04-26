import cls from './Users.module.css';
import * as React from "react";
import * as axios from "axios";
import userPhoto from './../../images/user.png';

export const Users = (props) => {
    if (props.users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            });
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={cls.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
    // let dialogsElements = props.messagesPage.dialogs.map(el => (
    //     <DialogItem id={el.id} key={el.id} name={el.name} image={el.image}/>));
    // let messagesElements = props.messagesPage.messages.map(el => (<Message message={el.message} key={el.id}/>));
    // let newMessageBody = props.messagesPage.newMessageBody;
    // let onSendMessageClick = () => {
    //     props.onSendMessageClick();
    // };
    // let onMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.onMessageChange(body);
    // };
    //
    // return (
    //     <div className={cls.dialogs}>
    //         <div className={cls.dialogsItems}>
    //             {dialogsElements}
    //         </div>
    //         <div className={cls.messages}>
    //             <div>{messagesElements}</div>
    //             <div>
    //                 <div><textarea onChange={onMessageChange} placeholder='Write here...'
    //                                value={newMessageBody}/></div>
    //                 <div>
    //                     <button onClick={onSendMessageClick}>Send</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
};