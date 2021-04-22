import cls from './Users.module.css';
import * as React from "react";

export const Users = (props) => {

    if (props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_inoMhjfUWG1o6ejHD7v9iEHnrDDjr53a3oc1r4muc1jUfpuq6ONP3Ku9DNNw7PbYiGQ&usqp=CAU',
                followed: false,
                fullName: 'Yan',
                status: 'Main kaban',
                location: {city: 'Dnipro', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbTU5C_QXVqSVbVvA1kMsJ6W2FJxE6Ki6Xnw&usqp=CAU',
                followed: true,
                fullName: 'Kura',
                status: 'secondary kaban',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3A5HVX3h4G0x2RXS9fzvlIC-Ea1x7wUc3A&usqp=CAU',
                followed: false,
                fullName: 'Misha',
                status: 'secondary kaban',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ]);
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={cls.userPhoto}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={() => {props.unfollow(u.id) } }>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id) } }>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
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