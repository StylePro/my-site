import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state)=> {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch)=> {
    return {
        addPost: ()=> {
            dispatch(addPostActionCreator())
        },
        PostChange: (text)=> {
            let action = onPostChangeActionCreator(text);
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;