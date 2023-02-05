
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

    addPost () {
        debugger;
        let newPost = {
            id: Date.now(),
            message: this._state.profilePage.newPost,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPost = newText;
        this._callSubscriber(this._state);
    },

    addMessage () {
        let newMessage = {
            id: Date.now(),
            message: this._state.dialogsPage.newMessage,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._callSubscriber(this._state);
    },
    updateNewDialogsMessage (newText) {
        this._state.dialogsPage.newMessage = newText;
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },
}
export default store;
window.state = store;