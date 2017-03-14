import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCIBcHBHqcdRfBBkJ9E7JhO7NnJAuZLT88',
            authDomain: 'manager-app-c6e48.firebaseapp.com',
            databaseURL: 'https://manager-app-c6e48.firebaseio.com',
            storageBucket: 'manager-app-c6e48.appspot.com',
            messagingSenderId: '89501597450'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
