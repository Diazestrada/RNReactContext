/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import AuthProvider from './src/routers'

import configureStore from './src/shared/redux/store/store'

const { store, persistor } = configureStore()


const App: () => React$Node = () => {
  return (
    <>
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
