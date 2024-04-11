import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../../screens/Authorization/Login/Login';
import { Routes } from '../type';
import Register from '../../../screens/Authorization/Register/Register';
import ForgotPassword from '../../../screens/Authorization/ForgotPassword/ForgotPassword';
import ResetEmail from '../../../screens/Authorization/ResetEmail/ResetEmail';
import GetStarted from '../../../screens/Authorization/GetStarted/GetStarted';
import VerifyNumber from '../../../screens/Authorization/VerifyEmail/VerifyNumber';

const AuthorizationStack = createStackNavigator()
const AuthorizationNavigation= () => {

  return (
    
      <AuthorizationStack.Navigator
        screenOptions={() => ({
          headerShown: true,
        })}
      >
        <AuthorizationStack.Screen 
        name={Routes.LOGIN} 
        component={Login} />

        <AuthorizationStack.Screen 
        name={Routes.REGISTER}
         component={Register} />
        <AuthorizationStack.Screen name={Routes.FORGOTPASSWORD} component={ForgotPassword} />
        <AuthorizationStack.Screen name={Routes.RESETEMAIL} component={ResetEmail} />
        <AuthorizationStack.Screen name={Routes.VERIFYNUMBER} component={VerifyNumber} />
        <AuthorizationStack.Screen name={Routes.GETSTARTED} component={GetStarted} />

      </AuthorizationStack.Navigator>
    
  )
}

export default AuthorizationNavigation