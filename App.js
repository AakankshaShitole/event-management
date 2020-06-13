import React, {Component} from 'react';
import Expo from 'expo'
const Stream = require('stream-browserify');

import {View} from 'react-native-elements';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native'

import Router from './app/routes/routes'
//import myStore from './app/redux/store'

//import Router from './app/config/routes';

export default class App extends Component {
    render() {
        return (
          <NavigationContainer>

              <Router/>
          </NavigationContainer>
           /* <Provider store= {myStore}>
            </Provider>
            */
        );
    }
}

Expo.registerRootComponent(App)