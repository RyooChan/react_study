import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';

ReactDOM.render(
    <React.StrictMode>
        <Library />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();