import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';

import routes from './auth.routes';
import SignIn from '../screens/auth/SignIn';
import Register from '../screens/auth/Register';
import { HeaderMenu } from '../components/Header';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName={routes.initialRouteName}
    mode="card"
    headerMode="screen">
    <Stack.Screen
      name={routes.stack.SignIn}
      component={SignIn}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={routes.stack.Register}
      component={Register}
      options={{
        title: 'Registration',
        header: (props) => <HeaderMenu {...props} />,
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;