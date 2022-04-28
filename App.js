import React from 'react'

import TabNavigator from './navigation/tab/TabNavigator'

import { Provider } from 'react-redux'

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator></TabNavigator>
    </Provider>
  );
}
