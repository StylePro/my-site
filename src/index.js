import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addPost, updateNewPostText} from "./components/state/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = () => {
    return (
        root.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App state={state}
                         addPost={addPost}
                         updateNewPostText={updateNewPostText}/>
                </BrowserRouter>
            </React.StrictMode>
        )
    )
};

rerenderEntireTree();

