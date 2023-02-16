import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

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
        console.log('redux changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
}

export default store;