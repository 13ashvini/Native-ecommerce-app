import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'
import IntroSliderComponent from '../../component/ui/IntroSliderComponent'
import { Routes } from '../type'
import Login from '../../../screens/Authorization/Login/Login'
import ForgotPassword from '../../../screens/Authorization/ForgotPassword/ForgotPassword'
import VerifyNumber from '../../../screens/Authorization/VerifyEmail/VerifyNumber'
import ResetEmail from '../../../screens/Authorization/ResetEmail/ResetEmail'
import BottomBar from './BottomBar'
import HomeNavigation from '../stack/HomeNavigation'
import SearchNavigation from '../stack/SearchNavigation'
import AccountSettingNavigation from '../stack/AccountSettingNavigation'
import OrderNavigation from '../stack/OrderNavigation'

const BottomTabStack = createBottomTabNavigator()
const BottomTabNavigation = () => {
  return (

    <BottomTabStack.Navigator
      tabBar={props => <BottomBar {...props} />}
      screenOptions={() => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        keyboardHidesTabBar: false,
        style: {
          position: 'absolute',
        },

      })}
    >
      <BottomTabStack.Screen
        options={{
          title: "Home"
        }}
        name={Routes.HOME} component={HomeNavigation} />
      <BottomTabStack.Screen name={Routes.SEARCH} component={SearchNavigation} />
      <BottomTabStack.Screen name={Routes.ORDERS} component={OrderNavigation} />
      <BottomTabStack.Screen name={Routes.Profile} component={AccountSettingNavigation} />
    </BottomTabStack.Navigator>

  )
}

export default BottomTabNavigation