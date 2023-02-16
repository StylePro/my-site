import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from './components/redux/redux-store';


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
    return (
        root.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App state={state}
                         dispatch={store.dispatch.bind(store)}/>
                </BrowserRouter>
            </React.StrictMode>
        )
    )
};

rerenderEntireTree(store.getState());
store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state)
});

