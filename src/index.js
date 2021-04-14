import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {addMessage, addPost, state, subscribe, updateNewMessageText, updateNewPostText} from './redux/state';
import {store} from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            {/*<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>*/}
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
