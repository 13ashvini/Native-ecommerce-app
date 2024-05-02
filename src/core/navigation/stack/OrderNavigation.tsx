import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OrderWrapper from '../../../screens/order/OrderWrapper'
import { Routes } from '../type'
import OrderCheckout from '../../../screens/order/OrderCheckout'

const OrderNavigation = () => {
    const orderStack = createStackNavigator()
    return (
        <orderStack.Navigator>
            <orderStack.Screen name={Routes.OrderScreen} component={OrderWrapper}
                options={
                    {
                        headerShown: true,
                        title: "Your Orders",
                    }} />
            <orderStack.Screen name={Routes.OrderCheckout} component={OrderCheckout}
                options={
                    {
                        headerShown: true,
                        title: "Your Orders",
                    }} />

        </orderStack.Navigator>
    )
}

export default OrderNavigation