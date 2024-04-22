import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import HomePageSliderComponent from '../../core/component/ui/HomePageSliderComponent'
import Fonts from '../../core/contstants/Fonts'
import FeaturedPartnerCard from '../../core/component/ui/FeaturedPartnerCard'
import Color from '../../core/contstants/Color'
import { FeaturedPartnerData } from './FeaturedPartnersList'
import FastImage from 'react-native-fast-image'
import images from '../../core/assests/images'
import AllRestaurantsCard from '../../core/component/ui/AllRestaurantsCard'
import { Routes } from '../../core/navigation/type'
import { allRestaurantsListData } from './AllRestrauntsList'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/Store'
import { useGetAllFeaturePartnerListQuery } from '../../service/featuredPartnerService'
import { DEV_URL } from '../../core/env/env'

type Props = {
    featuredPartners: any[]
}

const HomeScreen = ({ navigation, featuredPartners }: any) => {

    const allRestrauntsList = allRestaurantsListData
    const BASE_URL = DEV_URL
    console.log("featuredPartners----------------", featuredPartners)

    const renderItem = () => {
        return (
            <View style={style.homeMainView}>
                <HomePageSliderComponent />

                <View style={{ display: 'flex', gap: 8 }}>
                    <View style={style.featuredPartnerView}>
                        <Text style={style.featuredPartnertext}>Featured Partners</Text>
                        <Text style={style.seeAllText}
                            onPress={() => {
                                navigation.navigate(Routes.FeaturePartner)
                            }}
                        >See All</Text>
                    </View>

                    <FlatList
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
                        keyExtractor={(item: any) => item.id}
                        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                    />
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
                        keyExtractor={(item: any) => item.id}
                        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                    />
                </View>

                <View style={{ display: 'flex', gap: 8 }}>
                    <View style={style.featuredPartnerView}>
                        <Text style={style.featuredPartnertext}>All Restaurants</Text>
                        <Text style={style.seeAllText}
                            onPress={() => {
                                navigation.navigate(Routes.AllRestaurants)
                            }}
                        >See All</Text>
                    </View>
                    <FlatList

                        data={allRestrauntsList}
                        renderItem={({ item }: any) => {
                            return (
                                <AllRestaurantsCard
                                    onPress={() => { }}
                                    ratingNumber={item?.ratingNumber}
                                    availableFoodType={item?.availableFoodType}
                                    image={item?.image}
                                    partnerName={item?.partnerName}
                                    location={item?.location}
                                    rating={item?.rating}
                                    time={item?.time}
                                    delivery={item?.delivery}

                                />
                            )
                        }}
                        // horizontal={true}
                        keyExtractor={(item: any) => item.id}
                        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                    />
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

})

export default HomeScreen