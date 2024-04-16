import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../type';
import RestaurantSearch from '../../../screens/Search/RestaurantSearch';
const SearchStack = createStackNavigator()
const SearchNavigation = () => {

    return (

        <SearchStack.Navigator
            screenOptions={() => ({
                headerShown: true,
            })}
        >
            <SearchStack.Screen
                options={{
                    title: "Search"
                }}
                name={Routes.RestaurantsSearch}
                component={RestaurantSearch} />


        </SearchStack.Navigator>

    )
}

export default SearchNavigation