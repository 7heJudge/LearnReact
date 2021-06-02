import cls from './Users.module.css';
import * as React from "react";
import userPhoto from './../../images/user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

export let Users = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesCount = 30;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            { pages.map(p => {
                return <span className={props.currentPage === p ? cls.selectedPage : ''}
                             onClick={ (e) => {
                                 props.onPageChanged(p)
                             } }  >{p} </span>
            }) }
        </div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={cls.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.onUnfollow(u.id);
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.onFollow(u.id);
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
};

