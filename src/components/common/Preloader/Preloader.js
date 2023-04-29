import React from "react";
import preloader from '../../common/images/preloader.gif'
import s from '../../Users/Users.module.css'


let Preloader =()=> {
    return (
            <div className={s.preloader}> <img src={preloader}/> </div>
    )
}

export default Preloader;