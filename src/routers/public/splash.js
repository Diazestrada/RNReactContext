import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

//screens

import SplashScreen from 'screens/main/splash/splash';

const Stack = createStackNavigator();

const NavigatorSplash = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="splash" component={SplashScreen} />
    </Stack.Navigator>
  )
}

export default NavigatorSplash