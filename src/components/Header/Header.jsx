import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://www.pngplay.com/wp-content/uploads/9/WWW-Website-Transparent-File.png'/>
            <div className={s.authBlock}>
                user: {props.isAuth
                ? props.login
                : <NavLink to path={'/auth'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;