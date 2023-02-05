import 'react-native-gesture-handler';

import React, { type PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { StackLogin } from './src/navigation/stackLogin';
import { initFirebase } from './src/services/firebase';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackLogin />
      </NavigationContainer>
    </Provider>
  );
};


export default App;
