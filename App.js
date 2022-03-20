/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation, { LogIn, HomeStack } from './src/navigation';
import store from './src/reduxSaga/store'
import { Provider } from 'react-redux'
import Loading from './src/components/Loading';


const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <Loading />
    </Provider>
  );
};

export default App;
