import cls from './MyPosts.module.css';
import {Post} from "./Post/Post";
import * as React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

export const MyPosts = (props) => {
    let postsElements = props.posts.map(el => (<Post message={el.message} likeCounts={el.likeCounts}/>));
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };
    return (
        <div className={cls.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={cls.posts}>
                {postsElements}
            </div>
        </div>
    );
};