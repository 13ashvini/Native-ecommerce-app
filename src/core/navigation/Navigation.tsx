import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { createContext, useContext } from 'react';
import { View, useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { navigationRef } from './RootNavigation'
import IntroSliderComponent from '../component/ui/IntroSliderComponent'
import { Routes } from './type'
import AuthorizationNavigation from './stack/AuthorizationNavigation'
import { BottomNavigation } from 'react-native-paper'
import BottomTabNavigation from './BottomTab/BottomTabNavigation'
import WelcomeScreenSlide from '../../screens/WelcomeScreen/WelcomeScreenSlide'
import Color from '../contstants/Color'



const RootStack = createStackNavigator()


const Navigation = () => {
    // const AppTheme = {
    //     ...DefaultTheme,
    //     colors: {
    //         ...DefaultTheme.colors,
    //         background: Color.mds_global_white_color,
    //         // Set the default text color to red
    //         text: "green"
    //     }
    // }
    const colorScheme = useColorScheme();
    const ThemeContext = createContext(DefaultTheme);

    const lightTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: Color.mds_global_white_color
            // Set default text color for light mode
        },
    };

    const darkTheme = {
        ...lightTheme,
        colors: {
            ...lightTheme.colors,
            // Set default text color for dark mode
        },
    };

    // Determine the theme based on the color scheme
    const AppTheme = colorScheme === 'dark' ? darkTheme : lightTheme;
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>


            <NavigationContainer
                theme={lightTheme}
                ref={navigationRef}
            >

                <RootStack.Navigator
                    screenOptions={{
                        headerShown: false,
                        // animation: 'slide_from_right',
                    }}
                >
                    <RootStack.Screen name={Routes?.ONBOARDING} component={WelcomeScreenSlide} />
                    <RootStack.Screen name={Routes?.AUTHORIZATIONNAVIGATION} component={AuthorizationNavigation} />
                    <RootStack.Screen name={Routes?.MAIN} component={BottomTabNavigation} />
                </RootStack.Navigator>
            </NavigationContainer>

        </GestureHandlerRootView>


    )
}

export default Navigation