import cls from './Dialogs.module.css';

export const Dialogs = (props) => {
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                <div className={cls.dialog + ' ' +cls.active}>
                    Yan-kaban
                </div>
                <div className={cls.dialog}>
                    Dima-kaban
                </div>
                <div className={cls.dialog}>
                    Misha-kaban
                </div>
                <div className={cls.dialog}>
                    Kura-kaban
                </div>
            </div>
            <div className={cls.messages}>
                <div className={cls.message}>Hi</div>
                <div className={cls.message}>How is ur dog?</div>
                <div className={cls.message}>Yooooo</div>
            </div>
        </div>
    );
};