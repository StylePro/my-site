import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {ProfileApi} from "../api/api";
import {withAuthNavigate} from "../hoc/withAuthNavigate";
import {compose} from "redux";

function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = 2
    }
    useEffect(() => {
        ProfileApi.getProfile(userId).then(responce => {
            props.setUserProfile(responce.data)
        })
    }, [userId]);

    return <Profile profile = {props.profile}/>
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    /*isAuth: state.auth.isAuth*/
})

export default compose(
    connect(mapStateToProps, {setUserProfile}),
    withAuthNavigate,
)(ProfileContainer)