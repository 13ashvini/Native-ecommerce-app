import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../type';
import FeaturedPartnersList from '../../../screens/Home/FeaturedPartnersList';
import AllRestrauntsList from '../../../screens/Home/AllRestrauntsList';
import RestaurantWrapper from '../../../screens/Home/RestrauntsDetail/RestaurantWrapper';
import AddToOrder from '../../../screens/Home/AddToOrder/AddToOrder';
import HomeScreenWrapper from '../../../screens/Home/HomeScreenWrapper';
import StoreLocation from '../../../screens/Home/FindRestaurantLocation/StoreLocation';
import AddRestaurant from '../../../screens/Home/AddRestaurant/AddRestaurant';
import AddRestaurantWrapper from '../../../screens/Home/AddRestaurant/AddRestaurantWrapper';
const DashboardStack = createStackNavigator()
const HomeNavigation = () => {

    return (

        <DashboardStack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}
        >


            <DashboardStack.Screen
                name={Routes.HomeScreen}
                component={HomeScreenWrapper}
                options={{
                    headerShown: true,
                    title: "Home",
                    // header: () => (
                    //     <Button
                    //         onPress={() => { }}
                    //         title="Info"
                    //         color="#fff"
                    //     />
                    // ),
                }}
            />

            <DashboardStack.Screen
                name={Routes.FeaturePartner}
                component={FeaturedPartnersList}
                options={{
                    headerShown: true,
                    title: "Home",

                }} />
            <DashboardStack.Screen
                name={Routes.StoreLocation}
                component={StoreLocation}
                options={{
                    headerShown: true,
                    title: "Set Location ",
                    // header: () => (
                    //     <Button
                    //         onPress={() => { }}
                    //         title="Info"
                    //         color="#fff"
                    //     />
                    // ),
                }}
            />
            <DashboardStack.Screen
                name={Routes.AllRestaurants}
                component={AllRestrauntsList}
                options={{
                    headerShown: true,
                    title: "All Restaurants",
                    // header: () => (
                    //     <Button
                    //         onPress={() => { }}
                    //         title="Info"
                    //         color="#fff"
                    //     />
                    // ),
                }}
            />

            <DashboardStack.Screen
                name={Routes.RestaurantDetail}
                component={RestaurantWrapper} />
            <DashboardStack.Screen
                name={Routes.AddToOrder}
                component={AddToOrder} />
            <DashboardStack.Screen
                name={Routes.AddRestaurant}
                component={AddRestaurantWrapper}
                options={{
                    headerShown: true,
                    title: "Add Restaurants",
                    // header: () => (
                    //     <Button
                    //         onPress={() => { }}
                    //         title="Info"
                    //         color="#fff"
                    //     />
                    // ),
                }}
            />
        </DashboardStack.Navigator>

    )
}

export default HomeNavigation