/*Мои посты*/
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

/*Сообщения*/
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE-NEW-DIALOG-MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 56},
                {id: 2, message: "It's Ok", likesCount: 23},
                {id: 3, message: 'Welcome', likesCount: 45},
            ],
            newPost: 'I need send Message',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Oleg"},
                {id: 2, name: "Egor"},
                {id: 3, name: "Marina"},
                {id: 4, name: "Petya"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Good"},
                {id: 3, message: "How are you"},
                {id: 4, message: "I love you"},
            ],
            newMessage: 'I love dialogs',
        },
    },
    getState() {
        return (this._state);
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: Date.now(),
                message: this._state.profilePage.newPost,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPost = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPost = action.newText;
            this._callSubscriber(this._state);
        }
        if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: Date.now(),
                message: this._state.dialogsPage.newMessage,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_DIALOG_MESSAGE) {
            this._state.dialogsPage.newMessage = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


export const addPostActionCreator = ()=> {

    return {
        type: ADD_POST
    }
}
export const onPostChangeActionCreator = (text)=> {

    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export const addMessageActionCreator = ()=> {

    return {type: ADD_MESSAGE}
}
export const updateMessageActionCreator = (text)=> {

    return {
        type: UPDATE_NEW_DIALOG_MESSAGE, newText: text
    }
}





export default store;
window.state = store;