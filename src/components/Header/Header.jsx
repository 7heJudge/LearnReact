import cls from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    const onLogout = () => {
      props.logout();
    };
    return (
        <header className={cls.header}>
            <img
                src='https://www.pinclipart.com/picdir/middle/379-3791327_pokemon-logos-png-vector-pokemon-logo-transparent-background.png'/>
                <div className={cls.login}>
                    { !props.isAuth ? <NavLink to={'/login'}>Login</NavLink> : <div>{props.login}
                    <button onClick={onLogout}>Logout</button></div> }
                </div>
        </header>
    );
};