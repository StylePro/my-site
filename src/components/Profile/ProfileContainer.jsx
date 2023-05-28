import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, setUserProfile} from "../redux/profile-reducer";
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
        ProfileApi.getStatus(userId).then(responce => {
            props.getUserStatus(responce.data)
        })
    }, [userId]);

    return <Profile profile = {props.profile} status={props.status}/>
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
    /*isAuth: state.auth.isAuth*/
})

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserStatus}),
    withAuthNavigate,
)(ProfileContainer)