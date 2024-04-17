import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../type';
import AccountSetting from '../../../screens/AccountSetting/AccountSetting';
import PasswordSetting from '../../../screens/AccountSetting/PasswordSetting';
import ProfileSetting from '../../../screens/AccountSetting/ProfileSetting';
import AddPaymentMethod from '../../../screens/AccountSetting/PaymentMethods/AddPaymentMethod';
import PaymentMethods from '../../../screens/AccountSetting/PaymentMethods/PaymentMethods';
import AddSocialAccount from '../../../screens/AccountSetting/AddSocialAccount/AddSocialAccount';
const AccountStack = createStackNavigator()
const AccountSettingNavigation = () => {

    return (

        <AccountStack.Navigator
            screenOptions={() => ({
                headerShown: true,
            })}
        >
            <AccountStack.Screen
                name={Routes.AccountSettings}
                component={AccountSetting} />
            <AccountStack.Screen
                name={Routes.ChangeProfileSetting}
                component={ProfileSetting}
            // options={{
            //     title: "Profile Setting",
            //     headerRight: () => (
            //         <Tex></Text>
            //        )
            // }}
            />
            <AccountStack.Screen
                component={PasswordSetting}
                name={Routes.ChangePasswordSetting}
            />
            <AccountStack.Screen
                component={AddPaymentMethod}
                name={Routes.AddPaymentMethods}
            />
            <AccountStack.Screen
                component={PaymentMethods}
                name={Routes.PaymentMethod}
            />
            <AccountStack.Screen
                component={AddSocialAccount}
                name={Routes.AddSocialAccount}
            />

        </AccountStack.Navigator>
    )
}

export default AccountSettingNavigation