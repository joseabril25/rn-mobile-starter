import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';

import routes from './auth.routes';
import SignIn from '../screens/auth/SignIn';

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
  </Stack.Navigator>
);

export default AuthNavigator;