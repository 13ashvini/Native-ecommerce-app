import { View, Text } from 'react-native'
import React from 'react'
import Order from './Order'

const OrderWrapper = ({ navigation }: any) => {
    return (
        <View>

            <Order navigation={navigation} />

        </View>
    )
}

export default OrderWrapper