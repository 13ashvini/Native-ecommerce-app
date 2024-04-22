import { NavigationContainer, DefaultTheme, DarkTheme, CommonActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { createContext, useContext, useEffect } from 'react';
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
import { useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';



const RootStack = createStackNavigator()


const Navigation = () => {
    const { tokenData } = useSelector((state: RootState) => state.auth)

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
    const getAccessToken = async () => {
        // Check for the presence of the access token
        const accessToken = await AsyncStorage.getItem('access_token');
        console.log("accessToken---------", accessToken)
        // Navigate based on the presence of the access token
        if (accessToken !== null) {
            // navigationRef.current?.navigate(Routes.Main);
            navigationRef.current?.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        {
                            name: Routes.MAIN,
                            state: {
                                routes: [{ name: Routes.HOME }],
                            },
                        },
                    ],
                }),
            )
        } else {
            navigationRef.current?.navigate(Routes.ONBOARDING);
        }
    }
    useEffect(() => {
        getAccessToken()
    }, []);
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
                    {tokenData === null &&
                        <RootStack.Screen name={Routes?.ONBOARDING} component={WelcomeScreenSlide} />
                    }
                    {tokenData === null &&
                        <RootStack.Screen name={Routes?.AUTHORIZATIONNAVIGATION} component={AuthorizationNavigation} />
                    }

                    <RootStack.Screen name={Routes?.MAIN} component={BottomTabNavigation} />
                </RootStack.Navigator>
            </NavigationContainer>

        </GestureHandlerRootView>


    )
}

export default Navigation