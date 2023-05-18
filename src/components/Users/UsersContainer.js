import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    followSuccess,
    getUsersData,
    setCurrentPage,
    setUsers,
    toggleFollowingProgress, unfollow,
    unfollowSuccess
} from "../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {Navigate} from "react-router-dom";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersData(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersData(pageNumber)
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={`/login`}/>
        }
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    setUsers,
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsersData,
    follow,
    unfollow
})(UsersContainer)