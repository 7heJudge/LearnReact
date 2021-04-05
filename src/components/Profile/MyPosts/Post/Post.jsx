import cls from './Post.module.css';

export const Post = (props) => {
    return (
        <div className={cls.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbpenKx7Fa9h5m9Doq3d--5GLMLyiv4uYWQ&usqp=CAU'/>
            {props.message}
            <div><span>Like ({props.likeCounts})</span></div>
        </div>
    );
};