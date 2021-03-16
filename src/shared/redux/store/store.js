import AsyncStorage from '@react-native-async-storage/async-storage';

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";

import ROOT_REDUCER from "../reducers/rootReducer";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, ROOT_REDUCER)


const configureStore = (initialState) => {
  let store = createStore(persistedReducer, initialState, compose(applyMiddleware(createLogger()), applyMiddleware(thunk)))
  let persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore;
