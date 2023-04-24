import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setTotalUsersCount, setUsers, unfollow} from "../redux/users-reducer";
import axios from "axios";



class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} &count=${this.props.pageSize}`).then(responce => {
            debugger;
            this.props.setUsers(responce.data.items)
            this.props.setTotalUsersCount(responce.data.totalCount)
        })
    }

    render() {
        return <Users {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setTotalUsersCount})(UsersContainer)

