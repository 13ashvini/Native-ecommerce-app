/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  // useColorScheme
} from 'react-native';
import Navigation from './src/core/navigation/Navigation';
import FlashMessage from 'react-native-flash-message';
import { NativeBaseProvider, extendTheme } from 'native-base';
import theme from './src/core/utils/theme';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import store from './src/store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import persistor from './src/store/persistor';





const CustomThemeProvider = ({ children }: any) => {
  const colorScheme: 'light' | 'dark' | null | undefined = useColorScheme();
  const customColors = {
    light: {
      textColor: 'black',
      backgroundColor: 'white',
    },
    dark: {
      textColor: 'white',
      backgroundColor: 'black',
    },
  };

  const selectedColors = customColors[colorScheme || 'light'];

  const extendedTheme = extendTheme({
    colors: {
      ...selectedColors,
      backgroundColor: "green"
    },
  });

  return (
    <NativeBaseProvider theme={extendedTheme}>
      {children}
    </NativeBaseProvider>
  );
};



const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, []);

  return (
    // <View
    // style={{ flex: 1 }}>

    /* <Navigation />
    <FlashMessage position="top" /> */

    /* </View> */
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <Navigation />
          <FlashMessage position="top" />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>


  )
}

export default App;
