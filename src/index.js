import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';


import { BrowserRouter  as Router} from 'react-router-dom';
import App from './components/App';

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";

ReactDOM.render(
    <Router>
        <Provider store={createStore(reducers)}>
        <App />
        </Provider>
    </Router>
    ,
    document.getElementById('root'));

