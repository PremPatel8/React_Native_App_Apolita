import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/SignUp";


const Navigation = createStackNavigator(
    {
        LoginScreen: LoginScreen,
        SignUp: SignUp,
    },
    {
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
            backgroundColor: '#000',
            },
        },
    }
);

const container = createAppContainer(Navigation);

export default container;