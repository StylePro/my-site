import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props)=> {
    return (
        <div className={s.header}>
            <img src = 'https://e7.pngegg.com/pngimages/660/974/png-clipart-logo-others-miscellaneous-3d-computer-graphics.png'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
}
export default Header;