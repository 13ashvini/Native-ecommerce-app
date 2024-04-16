import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../type';
import AccountSetting from '../../../screens/AccountSetting/AccountSetting';
const AccountStack = createStackNavigator()
const AccountSettingNavigation = () => {

    return (

        <AccountStack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <AccountStack.Screen
                name={Routes.AccountSettings}
                component={AccountSetting} />

        </AccountStack.Navigator>
    )
}

export default AccountSettingNavigation