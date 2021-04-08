import cls from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = (props) => {
    let postsElements = props.posts.map(el => (<Post message={el.message} likeCounts={el.likeCounts}/>));
    return (
        <div className={cls.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={cls.posts}>
                {postsElements}
            </div>
        </div>
    );
};