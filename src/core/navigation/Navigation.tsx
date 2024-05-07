
import { NavigationContainer, DefaultTheme, DarkTheme, CommonActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Text, View, useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { navigationRef } from './RootNavigation'

import { Routes } from './type'
import AuthorizationNavigation from './stack/AuthorizationNavigation'
import BottomTabNavigation from './BottomTab/BottomTabNavigation'
import WelcomeScreenSlide from '../../screens/WelcomeScreen/WelcomeScreenSlide'
import Color from '../contstants/Color'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAccessToken } from '../../Slice/authslice';
import { addEventListener } from "@react-native-community/netinfo";



const RootStack = createStackNavigator()
const CheckInternte = ({ isContected, setIsConcted }: any) => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const unsubscribe = addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            setIsConcted(state.isConnected)            // setShowMessage(isContected);
            if (isContected) {
                console.log("dsdasdas11")
                setShowMessage(true);
                setTimeout(() => {
                    setShowMessage(false);
                }, 2000); // Hide the message after 2 seconds
            }

        });

        return () => unsubscribe();
    }, [])
    return (
        // <View style={{}}>
        //     {isContected ?
        //         <Text
        //             style={{
        //                 padding: 10,
        //                 backgroundColor: "green",
        //                 color: 'white'
        //             }}
        //         >Back Online</Text> :
        //         <View style={{}}>

        //             <Text style={{
        //                 padding: 10,
        //                 backgroundColor: "red",
        //                 color: 'white'
        //             }}>{isContected ? '' : 'No Internet connection.'}</Text>
        //         </View >
        //     }
        // </View>
        <View style={{}}>
            {(showMessage && !isContected) && (
                <Text
                    style={{
                        padding: 10,
                        backgroundColor: "green",
                        color: "white"
                    }}
                >
                    Back Online
                </Text>
            )}
            {isContected ?
                null :
                <View style={{}}>

                    <Text style={{
                        padding: 10,
                        backgroundColor: "red",
                        color: 'white'
                    }}>{isContected ? '' : 'No Internet connection.'}</Text>
                </View >
            }
        </View>

    )
}

const Navigation = () => {
    const { tokenData } = useSelector((state: RootState) => state.auth)
    console.log("tokenData", tokenData)
    const dispatch = useDispatch()
    const colorScheme = useColorScheme();
    const [isContected, setIsConcted] = useState(false)



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
        dispatch(setAccessToken(accessToken))
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
            <CheckInternte isContected={isContected} setIsConcted={setIsConcted} />

        </GestureHandlerRootView>


    )
}

export default Navigation
