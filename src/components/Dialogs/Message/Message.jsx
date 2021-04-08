import cls from './../Dialogs.module.css';

export const Message = (props) => {
    return (
        <div className={cls.message}>{props.message}</div>
    );
};
