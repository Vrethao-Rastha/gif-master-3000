import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './Redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'

let newStore = store()

ReactDOM.render(
    <Provider store={ newStore }>
        <App />
    </Provider>,
document.getElementById('root'));


