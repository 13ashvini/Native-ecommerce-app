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
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './src/core/navigation/Navigation';
import FlashMessage from 'react-native-flash-message';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View >

    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [text, setText] = React.useState("");
  return (
    <View
      style={{ flex: 1 }}>

      <Navigation />
      <FlashMessage position="top" />

    </View>

  )
}

export default App;
