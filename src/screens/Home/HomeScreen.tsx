import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HomePageSliderComponent from '../../core/component/ui/HomePageSliderComponent'
import Fonts from '../../core/contstants/Fonts'
import FeaturedPartnerCard from '../../core/component/ui/FeaturedPartnerCard'
import Color from '../../core/contstants/Color'
import FastImage from 'react-native-fast-image'
import images from '../../core/assests/images'
import AllRestaurantsCard from '../../core/component/ui/AllRestaurantsCard'
import { Routes } from '../../core/navigation/type'
import { DEV_URL } from '../../core/env/env'
import RestaurantsSkeleton from '../../core/component/ui/RestaurantsSkeleton'
import FeaturedCardSkeleton from '../../core/component/ui/FeaturedCardSkeleton'

type Props = {
    featuredPartners: any[]
    allRestrauntsList: any[]
    navigation: any
    isRestaurantLoading: boolean
    featuredPartnersLoading: boolean
    handleMoreRestaurant: () => void
    hasMoreData: boolean
}

const HomeScreen = ({ navigation,
    featuredPartners,
    allRestrauntsList,
    isRestaurantLoading,
    featuredPartnersLoading,
    handleMoreRestaurant,
    hasMoreData }: Props) => {
    const BASE_URL = DEV_URL

    const renderItem = () => {
        return (

            <View style={style.homeMainView}>
                <HomePageSliderComponent />

                <View style={{ display: 'flex', gap: 8 }}>
                    <View style={style.featuredPartnerView}>
                        <Text style={style.featuredPartnertext}>Featured Partners</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(Routes.FeaturePartner)
                            }}
                        >
                            <Text style={style.seeAllText}

                            >See All</Text>
                        </TouchableOpacity>

                    </View>

                    {
                        featuredPartnersLoading ? <FeaturedCardSkeleton
                            data={[1, 2]}
                        /> : <FlatList
                            data={featuredPartners} renderItem={({ item }: any) => {

                                return (
                                    <FeaturedPartnerCard
                                        image={`${BASE_URL}/${item?.image}`}
                                        partnerName={item?.partnerName}
                                        location={item?.location}
                                        rating={item?.rating}
                                        time={item?.time}
                                        delivery={item?.delivery}

                                    />
                                )
                            }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            removeClippedSubviews={true}
                            keyExtractor={(item: any, index: any) => item?._id.toString() + index}
                            maxToRenderPerBatch={4}
                            updateCellsBatchingPeriod={4 / 2}
                            ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                        />
                    }

                </View>
                <View style={{ marginVertical: 10 }}>
                    <FastImage source={images?.homeScreenBanner} style={style?.bannerImageStyle} resizeMode="cover" />
                </View>
                <View style={{ display: 'flex', gap: 8 }}>
                    <View style={style.featuredPartnerView}>
                        <Text style={style.featuredPartnertext}>Best Picks Restaurants by team</Text>
                        <Text style={style.seeAllText}>See All</Text>
                    </View>
                    <FlatList

                        data={featuredPartners}

                        renderItem={({ item }: any) => {
                            return (
                                <FeaturedPartnerCard
                                    image={`${BASE_URL}/${item?.image}`}
                                    partnerName={item?.partnerName}
                                    location={item?.location}
                                    rating={item?.rating}
                                    time={item?.time}
                                    delivery={item?.delivery}

                                />
                            )
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item: any, index: any) => item?._id.toString() + index}
                        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                    />
                </View>

                <View style={{ display: 'flex', gap: 8 }}>
                    <View style={style.featuredPartnerView}>
                        <Text style={style.featuredPartnertext}>All Restaurants</Text>
                        {/* <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(Routes.AllRestaurants)
                            }}>
                            <Text style={style.seeAllText}

                            >See All</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(Routes.AddRestaurant)
                            }}>
                            <Text style={style.seeAllText}

                            >Add Restaurant</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        isRestaurantLoading ?
                            <View style={{ display: "flex", gap: 5 }}>
                                {
                                    Array(5)
                                        .fill(0)
                                        .map((el, index) => {
                                            return (
                                                <RestaurantsSkeleton />
                                            );
                                        })
                                }
                            </View>
                            :
                            <FlatList

                                data={allRestrauntsList}
                                renderItem={({ item }: any) => {

                                    return (
                                        <AllRestaurantsCard
                                            onPress={() => {
                                                navigation.navigate(Routes.RestaurantDetail, {
                                                    restaurantId: item?._id
                                                })
                                            }}

                                            ratingNumber={item?.ratingNumber}
                                            availableFoodType={[]}
                                            image={item?.images}
                                            partnerName={item?.restaurantPartnerName}
                                            location={item?.location}
                                            rating={item?.rating}
                                            time={item?.time}
                                            delivery={item?.deliveryType}

                                        />
                                    )
                                }}
                                // horizontal={true}
                                keyExtractor={(item: any, index: any) => item?._id.toString() + index}
                                onEndReached={hasMoreData ? handleMoreRestaurant : null}
                                ItemSeparatorComponent={() => <View style={{ height: 15 }}

                                />}
                                ListFooterComponent={() => {
                                    return (
                                        <View>
                                            {hasMoreData ?
                                                <ActivityIndicator
                                                    color={Color.mds_global_main_Yellow_color} /> : <View>
                                                    <Text
                                                        style={style.noMoreFoodData}
                                                    >No More Data Found</Text></View>}
                                        </View>
                                    )
                                }}
                            />
                    }

                </View>
            </View>
        )
    }
    return (
        <FlatList
            data={[1]}
            renderItem={renderItem}
        />
    )
}
const style = StyleSheet.create({
    homeMainView: {
        display: 'flex',
        flexDirection: "column",
        gap: 15,
        paddingHorizontal: 20
    },

    featuredPartnertext: {
        ...Fonts.style.mds_ui_gothic_font_heading6_bold,
        flex: 2
    },
    seeAllText: {
        ...Fonts.style.mds_ui_gothic_font_medium_thin,
        color: Color.mds_global_main_Yellow_color,
        flex: 1,
        textAlign: 'right'

    },
    featuredPartnerView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        justifyContent: "space-between",


    },
    FeaturedPartnerDataView: {
        display: "flex",
        flexDirection: "row",
        // flexWrap: "wrap",
        gap: 10,
        // justifyContent: "space-between",
        // gap: 10,

        flex: 1

    },
    bannerImageStyle: {
        width: "100%",
        height: 170,

    },
    noMoreFoodData: {
        color: Color.mds_global_black_color,
        padding: 5,
        textAlign: "center"
    }

})

export default HomeScreen