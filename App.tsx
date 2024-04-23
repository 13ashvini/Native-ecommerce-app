/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
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
import { DefaultTheme, } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store/Store';
// import { AppearanceProvider, useColorScheme } from 'react-native-appearance';




const CustomThemeProvider = ({ children }: any) => {
  const colorScheme: 'light' | 'dark' | null | undefined = useColorScheme();

  // Define custom colors for light and dark modes
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

  // Get the custom colors based on the color scheme or default to light mode
  const selectedColors = customColors[colorScheme || 'light'];

  // Extend the default theme with the selected colors
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

  // Wrap the NativeBaseProvider withDefaultProps to apply the extended theme


  const isDarkMode = useColorScheme() === 'dark';
  SplashScreen.hide()
  const [text, setText] = React.useState("");
  return (
    // <View
    // style={{ flex: 1 }}>

    /* <Navigation />
    <FlashMessage position="top" /> */

    /* </View> */
    <Provider store={store}>
      {/* <SafeAreaView> */}
      {/* <NativeBaseProvider theme={theme}> */}
      <Navigation />
      <FlashMessage position="top" />
      {/* </NativeBaseProvider> */}
      {/* </SafeAreaView> */}
    </Provider>


  )
}

export default App;
