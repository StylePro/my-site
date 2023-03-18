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
            return {
                ...state,
                messages: [...state.messages, {id: Date.now(), message: state.newMessage}],
                newMessage: ''
            }
        case UPDATE_NEW_DIALOG_MESSAGE:
            return {
                ...state,
                newMessage: action.newText
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = ()=> ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (text)=> ({type: UPDATE_NEW_DIALOG_MESSAGE, newText: text})

export default dialogReducer;