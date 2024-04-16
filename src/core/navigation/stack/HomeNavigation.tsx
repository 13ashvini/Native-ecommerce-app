import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../type';
import HomeScreen from '../../../screens/Home/HomeScreen';
import FeaturedPartnersList from '../../../screens/Home/FeaturedPartnersList';
import AllRestrauntsList from '../../../screens/Home/AllRestrauntsList';
import RestrauntsDetail from '../../../screens/Home/RestrauntsDetail/RestrauntsDetail';
import RestaurantWrapper from '../../../screens/Home/RestrauntsDetail/RestaurantWrapper';
import AddToOrder from '../../../screens/Home/AddToOrder/AddToOrder';
const DashboardStack = createStackNavigator()
const HomeNavigation = () => {

    return (

        <DashboardStack.Navigator
            screenOptions={() => ({
                headerShown: true,
            })}
        >
            <DashboardStack.Screen
                name={Routes.HomeScreen}
                component={HomeScreen} />

            <DashboardStack.Screen
                name={Routes.FeaturePartner}
                component={FeaturedPartnersList} />

            <DashboardStack.Screen
                name={Routes.AllRestaurants}
                component={AllRestrauntsList} />

            <DashboardStack.Screen
                name={Routes.RestaurantDetail}
                component={RestaurantWrapper} />
            <DashboardStack.Screen
                name={Routes.AddToOrder}
                component={AddToOrder} />
        </DashboardStack.Navigator>

    )
}

export default HomeNavigation