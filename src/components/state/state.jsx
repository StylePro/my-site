let rerenderEntireTree = ()=> {
    console.log('state changed')
}


const state = {
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
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 56},
            {id: 2, message: "It's Ok", likesCount: 23},
            {id: 3, message: 'Welcome', likesCount: 45},
        ],
        newPost: 'I need send Message',
    }
}

export const addPost = ()=> {
    let newPost = {
        id: 4,
        message: state.profilePage.newPost,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPost = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText)=> {
    state.profilePage.newPost = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
        rerenderEntireTree = observer;
}

window.state = state;


export default state;