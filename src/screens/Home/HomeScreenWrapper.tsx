import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import HomeScreen from './HomeScreen'
import { setIsLoading, setItems } from '../../Slice/featurePartnerSlice'
import { useGetAllFeaturePartnerListQuery } from '../../service/featuredPartnerService'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/Store'

const HomeScreenWrapper = () => {
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
    return (
        <View>
            <HomeScreen
                featuredPartners={items?.data}
            />
        </View>
    )
}

export default HomeScreenWrapper