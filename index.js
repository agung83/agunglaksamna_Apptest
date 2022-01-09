/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import configurasiStore  from './src/redux/ConfigStore';
import { Provider } from 'react-redux';

const store = configurasiStore();
const RNRedux = () => (
    <Provider store = {store}>
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () => RNRedux);
