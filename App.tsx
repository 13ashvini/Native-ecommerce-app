/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';

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
import NetInfo from '@react-native-community/netinfo';




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
  const [checkInternetState, setCheckInternetState] = useState(false)
  console.log("checkInternetState-=-=-000", checkInternetState)
  const goOnline = async () => {
    // if ((await isOfflineFirst(apiPath)) && !isWeb()) {
    //     return false;
    // }
    const isConnectionAvailable = await checkInternetConnectionForApp();
    console.log("isConnectionAvailable", isConnectionAvailable)
    return isConnectionAvailable;
  };



  const checkInternetConnectionForApp = async () => {
    return NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        return false;
      } else {
        return true;
      }
    });
  };
  const checkInternatFuntion = async () => {
    const checkInternet = await goOnline()
    setCheckInternetState(checkInternet)
    console.log("checkInternet-----", checkInternet)
    return checkInternet
  }
  useEffect(() => {
    SplashScreen.hide()
    checkInternatFuntion()
  }, []);

  useEffect(() => {
    checkInternatFuntion()
  }, [checkInternetState]);
  // const isCheckInt = checkInternatFuntion()

  // console.log("checkInternet-------", checkInternet)
  return (
    // <View
    // style={{ flex: 1 }}>

    /* <Navigation />
    <FlashMessage position="top" /> */

    /* </View> */
    <>
      {!checkInternetState ? <View><Text>
        Check INternet
      </Text></View> :
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NativeBaseProvider theme={theme}>
              <Navigation />
              <FlashMessage position="top" />
            </NativeBaseProvider>
          </PersistGate>
        </Provider>}

    </>


  )
}

export default App;
