/*_______назначаем константы_________*/
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 56},
        {id: 2, message: "It's Ok", likesCount: 23},
        {id: 3, message: 'Welcome', likesCount: 45},
    ],
    newPost: 'I need send Message',
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
        default:
            return state;
    }
}
export const addPostActionCreator = ()=> ({type: ADD_POST});
export const onPostChangeActionCreator = (text)=> ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;