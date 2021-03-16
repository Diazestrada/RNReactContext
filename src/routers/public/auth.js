import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

//screens

import AuthScreen from 'screens/main/splash/auth';

const Stack = createStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={AuthScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack