import React from 'react';
import ReactDOM from 'react-dom';
import App from './componets/app'
import registerServiceWorker from './registerServiceWorker';
import {} from "../node_modules/bootstrap/dist/css/bootstrap.css";
import {HashRouter} from "react-router-dom"

import { Provider } from 'react-redux'

import store from './redux/store/store';


ReactDOM.render(
    <HashRouter>  
    <Provider store={store}>
        <App />
    </Provider>
    </HashRouter>,
    document.getElementById('root'));

registerServiceWorker();


