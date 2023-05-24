import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth
})
export const withAuthNavigate = (Component)=> {
    function Redirect (props) {
        if (!props.isAuth) return <Navigate to={`/login`}/>
        return <Component {...props}/>
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(Redirect)
    return ConnectedAuthRedirectComponent
}

