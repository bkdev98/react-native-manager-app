import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;
