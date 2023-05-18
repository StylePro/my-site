import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUserData} from "../redux/auth-reducer";

class HeaderComponent extends React.Component {
   componentDidMount() {
       this.props.getAuthUserData()
   }
   render() {
       return <Header {...this.props}/>
   }

}

let mapStateToProps =(state)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect (mapStateToProps, {getAuthUserData})(HeaderComponent)