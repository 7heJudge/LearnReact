import cls from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi, how r u?', likeCounts: 4},
        {id: 2, message: "It's my first post", likeCounts: 41},
    ];
    let postsElements = postsData.map(el => (<Post message={el.message} likeCounts={el.likeCounts}/>));
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