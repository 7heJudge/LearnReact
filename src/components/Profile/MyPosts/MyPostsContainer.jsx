import * as React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
      posts: state.profilePage.posts
  };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (message) => {
            dispatch(addPostActionCreator(message));
        }
    };
};


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);