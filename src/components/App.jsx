import React, { Component } from "react";
import '../styles/Style.css';
import AuthContainer from './AuthContainer';
import RegContainer from './RegContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../store/reducers';
import Header from './Header';
import Feed from './Feed';

const store = createStore(rootReducer);

class App extends Component {
    render() {
        return (
            // <Provider store={store}>
            //     <div>
            //         <AuthContainer />
            //         <RegContainer />
            //     </div>
            // </Provider>
            <div>
                <Header /> 
                <Feed />
            </div>
        );
    }
}

export default App;