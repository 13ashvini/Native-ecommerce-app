import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../type';
import RestaurantSearch from '../../../screens/Search/RestaurantSearch';
import RestaurantsCategoryListData from '../../../screens/Search/RestaurantsCategoryListData';
import SearchFoodItem from '../../../screens/Search/SearchFoodItem';
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
            <SearchStack.Screen
                options={{
                    title: "Category"
                }}
                name={Routes.RestaurantCategorySearch}
                component={RestaurantsCategoryListData} />
            <SearchStack.Screen
                options={{
                    title: ""
                }}
                name={Routes.searchFoodItems}
                component={SearchFoodItem} />


        </SearchStack.Navigator>

    )
}

export default SearchNavigation