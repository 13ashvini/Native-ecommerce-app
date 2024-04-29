import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../../core/component/Input/Input'
import Color from '../../core/contstants/Color'
import * as Icons from "../../core/svg"
import images from '../../core/assests/images'
import Fonts from '../../core/contstants/Fonts'
import FastImage from 'react-native-fast-image'
import { allRestaurantsListData } from '../Home/AllRestrauntsList'
import { Routes } from '../../core/navigation/type'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/Store'
import { useGetAllRestaurantListQuery } from '../../service/RestaurantService'
import { useDisclose } from 'native-base'
import { setIsLoading } from '../../Slice/restaurantListSlice'
import { DEV_URL } from '../../core/env/env'
import FeaturedCardSkeleton from '../../core/component/ui/FeaturedCardSkeleton'
const TopRastarants = [{
    id: 12,
    image: [images?.TopRestaurants1],
    partnerName: "The Halal Guys",
    location: "Forrest Place, Perth",
    rating: "4.3",
    time: "25 min",
    delivery: "Standard delivery",
    availableFoodType: [
        "Fast Food", "Burger", "American"
    ],
    ratingNumber: "650"
},
{
    id: 13,
    image: [images?.FeatureFoodImage10],
    partnerName: "Popeyes 1426 Flmst",
    location: "Forrest Place, Perth",
    rating: "4.3",
    time: "25 min",
    delivery: "Standard delivery",
    availableFoodType: [
        "Fast Food", "Burger", "American"
    ],
    ratingNumber: "650"
},
{
    id: 14,
    image: [images?.TopRestaurants2],
    partnerName: "Mixt - Yerba Buena",
    location: "Forrest Place, Perth",
    rating: "4.3",
    time: "25 min",
    delivery: "Standard delivery",
    availableFoodType: [
        "Fast Food", "Burger", "American"
    ],
    ratingNumber: "650"
},
{
    id: 15,
    image: [images?.TopRestaurants3],
    partnerName: "Split Bread - Russian",
    location: "Forrest Place, Perth",
    rating: "4.3",
    time: "25 min",
    delivery: "Standard delivery",
    availableFoodType: [
        "Fast Food", "Burger", "American"
    ],
    ratingNumber: "650"
}, {
    id: 16,
    image: [images?.TopRestaurants4],
    partnerName: "The Halal Guys",
    location: "Forrest Place, Perth",
    rating: "4.3",
    time: "25 min",
    delivery: "Standard delivery",
    availableFoodType: [
        "Fast Food", "Burger", "American"
    ],
    ratingNumber: "650"
},
{
    id: 17,
    image: [images?.TopRestaurants5],
    partnerName: "The Halal Guys",
    location: "Forrest Place, Perth",
    rating: "4.3",
    time: "25 min",
    delivery: "Standard delivery",
    availableFoodType: [
        "Fast Food", "Burger", "American"
    ],
    ratingNumber: "650"
},
]
const RestaurantSearch = ({ navigation }: any) => {
    const BASE_URL = DEV_URL
    const screenWidth = Dimensions.get('window').width;
    const numColumns = 2;
    const [searchRestaurants, setSearchRestaurants] = useState("")
    const allRestaurants = allRestaurantsListData
    const { isLoading: isRestaurantLoading } = useSelector((state: RootState) => state.restaurantList)
    const [hasMoreData, setHasMoreData] = useState(true);
    const [restaurantList, setRestaurantList] = useState<any[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoadingMore, setIsLoadingMore] = useState(false); // Add state to track loading more
    const restaurantlimit = 6
    const dispatch = useDispatch()
    const { data: restaurantlistData, isLoading: isrestaurantlistDataLoading, isFetching: isrestaurantlistDataFetching } = useGetAllRestaurantListQuery(
        {
            search: searchRestaurants,
            limit: restaurantlimit,
            offset: (currentPage - 1) * restaurantlimit
        }
    )
    useEffect(() => {
        // @ts-ignore
        let restaurantList = restaurantlistData?.data || []
        let restaurantlimit = 6
        if (restaurantlistData) {
            if (currentPage === 1) {
                // @ts-ignore
                setRestaurantList(restaurantList || []);
            } else {
                // @ts-ignore
                setRestaurantList(prevData => [...prevData, ...restaurantList]);
            }
            // @ts-ignore
            setHasMoreData(restaurantList && restaurantList?.length === restaurantlimit);
            dispatch(setIsLoading(false));
            setIsLoadingMore(false);
        } else {
            dispatch(setIsLoading(true));
        }
    }, [restaurantlistData, searchRestaurants,]);

    const handleLoadMore = () => {
        if (!isrestaurantlistDataLoading && !isrestaurantlistDataFetching && hasMoreData && !isLoadingMore) {
            setIsLoadingMore(true);
            setCurrentPage(prevPage => prevPage + 1);
        }
    };
    const SearchIcon = Icons.SearchTabIcon
    const renderItemData = (() => {
        const cardWidth = (screenWidth);

        return (
            <View style={[{ display: "flex", gap: 5, paddingHorizontal: 10, paddingVertical: 5, }]}>
                <View>
                    <Input
                        name=""
                        value={searchRestaurants}
                        onChangeText={(e) => {
                            setSearchRestaurants(e);
                            setCurrentPage(1)
                        }}
                        placeholder='Search Restaurants'
                        activeUnderlineColor={Color.mds_global_gray_10_color}
                        underlineColor={Color.mds_global_gray_10_color}
                        textColor={Color.mds_global_gray_color}
                        leftIcon={SearchIcon}
                        type='outlined'
                        activeOutlineColor={Color.mds_global_gray_color}
                    />
                </View>
                <View style={{ flex: 1, gap: 5, }}>
                    {!searchRestaurants?.length ? <View >
                        <Text style={styles.TopRastaurants}>Top Restaurants</Text>
                    </View> : null}
                    {isRestaurantLoading ? <FeaturedCardSkeleton
                        data={[1, 2, 3, 4, 5, 6]}
                    />
                        :
                        <View style={[styles.topRestaurantsView]}>
                            <FlatList
                                data={restaurantList}
                                renderItem={({ item }: any) => {
                                    return (
                                        <View style={[{ marginHorizontal: 5, flex: 1 },]}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    navigation.navigate(Routes.RestaurantCategorySearch)
                                                }}
                                            >
                                                <FastImage source={{
                                                    uri: `${BASE_URL}/${item?.images[0]}`

                                                }} style={styles?.featureImageStyle} resizeMode="cover" />
                                            </TouchableOpacity>
                                            <Text style={styles.featureFoodText}>{item?.restaurantPartnerName}</Text>

                                            <View style={styles.iconStyle}>

                                                {item?.foodtype?.map((foodtype: any) => {
                                                    return <View style={styles.iconStyle}>
                                                        <Icons.dotIcon />
                                                        <Text>  {foodtype}</Text>

                                                    </View>
                                                })}
                                            </View>
                                        </View>
                                    )
                                }}
                                onEndReached={() => { hasMoreData ? handleLoadMore() : null }}
                                removeClippedSubviews={true}
                                keyExtractor={(item: any, index: any) => item?._id.toString() + index?.toString()}
                                numColumns={numColumns}
                                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                                ListEmptyComponent={() => (
                                    <View style={{ flex: 1, width: "100%", marginHorizontal: 5 }} />
                                )}
                                ListFooterComponent={() => {
                                    return (
                                        <View>
                                            {hasMoreData ?
                                                <ActivityIndicator /> : <View>
                                                    <Text
                                                        style={styles.noMoreFoodData}
                                                    >No More Data Found</Text></View>}
                                        </View>
                                    )
                                }}
                            />
                        </View>
                    }

                </View >
            </View >
        )
    })
    return (
        <FlatList
            renderItem={renderItemData}

            data={[1]}
        />
    )
}
const styles = StyleSheet.create({
    FeaturedItemsText: {
        ...Fonts.style.mds_ui_gothic_font_body_thin,
        color: Color.mds_global_black_color
    },
    featureImageStyle: {
        width: "100%",
        height: 140,
        borderRadius: 10,
    },
    featureFoodText: {
        ...Fonts.style.mds_ui_gothic_font_medium_thin,
        color: Color.mds_global_black_color
    },

    foodCategoriesMainView: {
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        padding: 10
    },
    iconStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        flexWrap: "wrap"
    },
    topRestaurantsView: {
        display: "flex",
        paddingVertical: 2,
        width: "100%",
        gap: 10,
        justifyContent: "center",


    },
    TopRastaurants: {
        ...Fonts.style.mds_ui_gothic_font_body_bold,
        color: Color.mds_global_black_color,
        fontSize: Fonts.fontSize.body,
        fontWeight: "normal",
        marginTop: 10
    },
    noMoreFoodData: {
        color: Color.mds_global_black_color,
        padding: 5,
        textAlign: "center"
    }
})
export default RestaurantSearch