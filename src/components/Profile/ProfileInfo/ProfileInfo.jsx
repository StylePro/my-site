import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src='https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&amp;h=750'/>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large}/>
                </div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;