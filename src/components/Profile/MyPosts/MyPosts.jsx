import cls from './MyPosts.module.css';
import {Post} from "./Post/Post";
import * as React from "react";

export const MyPosts = (props) => {
    let postsElements = props.posts.map(el => (<Post message={el.message} key={el.id} likeCounts={el.likeCounts}/>));
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={cls.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={cls.posts}>
                {postsElements}
            </div>
        </div>
    );
};