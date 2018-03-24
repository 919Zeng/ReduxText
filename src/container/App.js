/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import {StackNavigation}from 'react-navigation';
import LoginPage from '../pages/LoginPage';
import MainPage from '..pages.MainPage';

const App = StackNavigation({
    Login: {screen:LoginPage},
    Main: {screen:MainPage},
});

export default App