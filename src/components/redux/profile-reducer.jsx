/*_______назначаем константы_________*/
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_USER_STATUS = 'GET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 56},
        {id: 2, message: "It's Ok", likesCount: 23},
        {id: 3, message: 'Welcome', likesCount: 45},
    ],
    newPost: 'I need send Message',
    profile: null,
    status: '----'
};
let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: Date.now(), message: [...state.newPost], likesCount: 0,}],
                newPost: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPost: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case GET_USER_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}
export const addPostActionCreator = ()=> ({type: ADD_POST});
export const onPostChangeActionCreator = (text)=> ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile)=> ({type: SET_USER_PROFILE, profile})
export const getUserStatus = (status)=> ({type: GET_USER_STATUS, status})
export default profileReducer;