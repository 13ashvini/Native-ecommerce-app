import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeScreen from './HomeScreen'
import { setIsLoading, setItems, } from '../../Slice/featurePartnerSlice'
import { useGetAllFeaturePartnerListQuery } from '../../service/featuredPartnerService'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/Store'
import { useGetAllRestaurantListQuery } from '../../service/RestaurantService'
import { setItems as restaurantSlice, setIsLoading as restauranLoading } from '../../Slice/restaurantListSlice'

const HomeScreenWrapper = ({ navigation }: any) => {
    const { items, isLoading: isFeaturePartnerLoading } = useSelector((state: RootState) => state.featurePartner)
    const { isLoading: isRestaurantLoading } = useSelector((state: RootState) => state.restaurantList)
    const [hasMoreData, setHasMoreData] = useState(true);
    const [restaurantList, setRestaurantList] = useState<any[]>([])
    const [currentPage, setCurrentPage] = useState(1);


    const dispatch = useDispatch()
    const restaurantlimit = 8
    const { data: featuredPartnerData, isLoading: isFeaturedPartnerDataLoading, isFetching: isFeaturedPartnerFetching } = useGetAllFeaturePartnerListQuery(
        {
            limit: 8
        }
    )

    useEffect(() => {
        if (!isFeaturedPartnerDataLoading || !isFeaturedPartnerFetching || featuredPartnerData) {
            dispatch(setItems(featuredPartnerData))
            dispatch(setIsLoading(false))
        } else {
            dispatch(setIsLoading(true))
        }
    }, [isFeaturedPartnerDataLoading, isFeaturedPartnerFetching, featuredPartnerData])

    const { data: restaurantlistData, isLoading: isrestaurantlistDataLoading, isFetching: isrestaurantlistDataFetching } = useGetAllRestaurantListQuery(
        {
            limit: restaurantlimit,
            offset: (currentPage - 1) * restaurantlimit
        }
    )

    // useEffect(() => {
    //     if (!isrestaurantlistDataLoading || !isFeaturedPartnerFetching || restaurantlistData) {
    //         dispatch(restaurantSlice(restaurantlistData))
    //         dispatch(restauranLoading(false))
    //     } else {
    //         dispatch(setIsLoading(true))
    //     }
    // }, [isrestaurantlistDataLoading, isFeaturedPartnerFetching, restaurantlistData])
    useEffect(() => {
        if (restaurantlistData) {
            // @ts-ignore
            setRestaurantList(prevData => [...prevData, ...restaurantlistData?.data]);
            // @ts-ignore
            setHasMoreData(restaurantlistData?.totalCount > currentPage * restaurantlimit);

            dispatch(restauranLoading(false));
        } else {
            dispatch(restauranLoading(true));
        }
    }, [isrestaurantlistDataLoading, isFeaturedPartnerFetching, restaurantlistData]);

    const handleLoadMore = () => {
        if (!isrestaurantlistDataLoading && !isrestaurantlistDataFetching && hasMoreData) {
            setCurrentPage(prevPage => prevPage + 1);

        }
    };
    return (
        <View>
            <HomeScreen
                hasMoreData={hasMoreData}
                handleMoreRestaurant={handleLoadMore}
                featuredPartnersLoading={isFeaturePartnerLoading}
                isRestaurantLoading={isRestaurantLoading}
                allRestrauntsList={restaurantList}
                navigation={navigation}
                featuredPartners={items?.data}
            />
        </View>
    )
}

export default HomeScreenWrapper