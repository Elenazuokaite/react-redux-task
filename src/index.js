import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configStore from './store/config-store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/styles.scss';

import App from './App.js';

const store = configStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));
