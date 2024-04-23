import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import HomeScreen from './HomeScreen'
import { setIsLoading, setItems } from '../../Slice/featurePartnerSlice'
import { useGetAllFeaturePartnerListQuery } from '../../service/featuredPartnerService'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/Store'
import { useGetAllRestaurantListQuery } from '../../service/RestaurantService'

const HomeScreenWrapper = ({ navigation }: any) => {
    const { items } = useSelector((state: RootState) => state.featurePartner)
    const dispatch = useDispatch()
    const { data: featuredPartnerData, isLoading: isFeaturedPartnerDataLoading, isFetching: isFeaturedPartnerFetching } = useGetAllFeaturePartnerListQuery(
        {
            limit: 20
        }
    )

    useEffect(() => {
        if (!isFeaturedPartnerDataLoading || !isFeaturedPartnerFetching || featuredPartnerData) {
            dispatch(setItems(featuredPartnerData))
            dispatch(setIsLoading(false))
        } else {
            dispatch(setIsLoading(true))
        }
    })

    const { data: restaurantlistData, isLoading: isrestaurantlistDataLoading, isFetching: isrestaurantlistDataFetching } = useGetAllRestaurantListQuery(
        {
            limit: 20,
            offset: 0
        }
    )

    useEffect(() => {
        if (!isrestaurantlistDataLoading || !isFeaturedPartnerFetching || restaurantlistData) {
            dispatch(setItems(restaurantlistData))
            dispatch(setIsLoading(false))
        } else {
            dispatch(setIsLoading(true))
        }
    })
    return (
        <View>
            <HomeScreen
                navigation={navigation}
                featuredPartners={items?.data}
            />
        </View>
    )
}

export default HomeScreenWrapper