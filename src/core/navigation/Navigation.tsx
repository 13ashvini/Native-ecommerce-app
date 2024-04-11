import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
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
const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Color.mds_global_white_color,
    },
}

const Navigation = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
       

            <NavigationContainer
                theme={AppTheme}
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