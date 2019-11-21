import React, { Component } from "react";
import '../styles/Style.css';
import AuthContainer from './AuthContainer';
import RegContainer from './RegContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../store/reducers';
import Feed from './Feed';
import Profile from './Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CommentForm from './CommentForm';


const store = createStore(rootReducer);

class App extends Component {
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div>
                        <Route path='/registration' component={RegContainer} exact />
                        <Route path='/' component={AuthContainer} exact />
                        <Route path='/comment' component={CommentForm} exact />
                    </div>
                </Provider>
                <div className="App">
                    <Route path='/tape' component={Feed} exact />
                    <Route path='/profile' component={Profile} exact /> 
                </div>
            </Router>
        );
    }
}

export default App;