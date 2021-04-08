import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how r u?', likeCounts: 4},
    {id: 2, message: "It's my first post", likeCounts: 41},
];
let dialogs = [
    {id: 1, name: 'Yan-kaban'},
    {id: 2, name: 'Dima-kaban'},
    {id: 3, name: 'Misha-kaban'},
    {id: 4, name: 'Kura-kaban'}
];

let messages = [
    {id: 1, message: 'Hey!'},
    {id: 2, message: 'Yooooo!'},
    {id: 3, message: 'Whaaats up?!'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
