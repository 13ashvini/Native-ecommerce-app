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
import Color from './src/core/contstants/Color';
import Navigation from './src/core/navigation/Navigation';
import Toast from 'react-native-toast-message';
import FlashMessage from 'react-native-flash-message';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>

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

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1
  },

  buttonView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"

  },

  facebookIconStyle: {
    backgroundColor: Color.mds_global_white_color,
    paddingVertical: 7,
    paddingHorizontal: 9,
    borderRadius: 5,
    marginHorizontal: 10

  }
});

export default App;
