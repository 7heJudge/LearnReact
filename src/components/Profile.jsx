import cls from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={cls.content}>
            <div>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My posts
                <div className={cls.posts}>
                    New post
                    <div className={cls.item}>
                        Post 1
                    </div>
                    <div className={cls.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
};