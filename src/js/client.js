import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import Active from './pages/Active';
import Completed from './pages/Completed';
import Layout from './pages/Layout';
import store from './store.js';

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={ hashHistory }>
            <Route path='/' component={Layout}>
                <IndexRoute component={Active}/>
                <Route path='/completed' name='name' component={Completed}></Route>
            </Route>
        </Router>
    </Provider>,
    app
);
