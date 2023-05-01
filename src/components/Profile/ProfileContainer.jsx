import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../redux/profile-reducer";
import {useParams} from "react-router-dom";

function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = 2
    }
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(responce => {
            props.setUserProfile(responce.data)
        })
    }, [userId]);

    return <Profile profile = {props.profile}/>
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)