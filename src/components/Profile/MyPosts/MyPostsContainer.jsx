import cls from './MyPosts.module.css';
import {Post} from "./Post/Post";
import * as React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props) => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };
    return (<MyPosts posts={props.store.getState().profilePage.posts}
                     newPostText={props.store.getState().profilePage.newPostText}
                     addPost={addPost}
                     updateNewPostText={onPostChange}/>
    );
};