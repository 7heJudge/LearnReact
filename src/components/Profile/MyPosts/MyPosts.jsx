import cls from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi, how r u?' likeCounts='4' />
            <Post message="It's my first post" likeCounts='41' />
        </div>
    );
};