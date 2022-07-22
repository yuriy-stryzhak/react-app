import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 14 },
    {id: 2, message: 'It\'s my first post', likesCount: 30 },
];

let dialogs = [
    {id: 1, name: 'Name 1'},
    {id: 2, name: 'Name 2'},
    {id: 3, name: 'Name 3'}
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your life?'},
    {id: 3, message: 'Can\'t complain'}
];


root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
