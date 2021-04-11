import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {addMessage, addPost, state, subscribe, updateNewMessageText, updateNewPostText} from './redux/state';
import {store, subscribe} from './redux/state';

let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            {/*<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>*/}
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
