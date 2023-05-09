import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollow
} from "../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {UsersAPI as usersAPI} from "../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers().then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true)
        usersAPI.getUsers2(pageNumber).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null}
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        unfollow: state.usersPage.unfollow,
        follow: state.usersPage.follow,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    setUsers,
    setTotalUsersCount,
    follow,
    unfollow,
    setCurrentPage,
    setIsFetching,
    toggleFollowingProgress
})(UsersContainer)