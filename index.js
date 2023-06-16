/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

// Wrapping the App into Provider for redux state management and also wrapping it in PersistGate to get the persisted data
const AppRedux = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppRedux);
