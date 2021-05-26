import cls from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";

export const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'/>
            </div>
            <div>
                {props.profile.fullName}
                <div className={cls.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    <div>{props.profile.aboutMe}</div>
                </div>
            </div>
        </div>
    );
};