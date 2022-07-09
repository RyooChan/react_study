import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';

ReactDOM.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();