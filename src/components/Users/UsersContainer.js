import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import axios from "axios";
import {setUsers} from "../redux/users-reducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`).then(responce => {
                this.props.setUsers(responce.data.items)
            }
        )
    }

    render() {
        return <Users {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }

}

export default connect(mapStateToProps, {setUsers})(UsersContainer)