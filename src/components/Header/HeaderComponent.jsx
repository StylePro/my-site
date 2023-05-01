import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {setUserData} from "../redux/auth-reducer";

class HeaderComponent extends React.Component {
   componentDidMount() {
       axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(responce => {
           let{id, login, email} = (responce.data.data)
           this.props.setUserData(id, login, email)
       })
   }
   render() {
       return <Header {...this.props}/>
   }

}

let mapStateToProps =(state)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photos: state.auth.photos

})

export default connect (mapStateToProps, {setUserData})(HeaderComponent)