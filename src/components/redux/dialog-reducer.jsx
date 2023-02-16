/*_______назначаем константы_________*/
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE-NEW-DIALOG-MESSAGE';

let initialState = {
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
    };
let dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: Date.now(),
                message: state.newMessage,
            }
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_NEW_DIALOG_MESSAGE:
            state.newMessage = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = ()=> ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (text)=> ({type: UPDATE_NEW_DIALOG_MESSAGE, newText: text})

export default dialogReducer;