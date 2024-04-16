import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../../core/component/Input/Input'
import Color from '../../core/contstants/Color'
import * as Icons from "../../core/svg"
import images from '../../core/assests/images'
import Fonts from '../../core/contstants/Fonts'
import FastImage from 'react-native-fast-image'
import { allRestaurantsListData } from '../Home/AllRestrauntsList'
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
    const screenWidth = Dimensions.get('window').width;
    const numColumns = 2;
    const [searchRestaurants, setSearchRestaurants] = useState("")
    const allRestaurants = allRestaurantsListData
    const concatedRestaurtData = allRestaurants.concat(TopRastarants)
    const [searchRestaurantsData, setSearchRestaurantsData] = useState<any[]>([])
    useEffect(() => {
        if (searchRestaurants) {
            const filteredData = concatedRestaurtData?.filter((item) => {
                return item?.partnerName?.toUpperCase().includes(searchRestaurants?.toUpperCase())
            })
            console.log("filteredDataerrwer", filteredData)
            setSearchRestaurantsData(filteredData)
        }

    }, [searchRestaurants])
    const SearchIcon = Icons.SearchTabIcon
    const renderItemData = (() => {
        const cardWidth = (screenWidth);
        console.log("cardWidth", cardWidth)
        return (
            <View style={[{ display: "flex", gap: 5, paddingHorizontal: 10, paddingVertical: 5, }]}>
                <View>
                    <Input
                        name=""
                        value={searchRestaurants}
                        onChangeText={(e) => { setSearchRestaurants(e) }}
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

                    <View style={[styles.topRestaurantsView]}>
                        <FlatList
                            data={searchRestaurants?.length ? searchRestaurantsData : TopRastarants}
                            renderItem={({ item }: any) => {
                                return (
                                    <View style={[{ marginHorizontal: 5, flex: 1 }, ((searchRestaurantsData.length % 2 === 0 && TopRastarants?.length % 2 === 0)) && { width: cardWidth }]}>
                                        <TouchableOpacity
                                            onPress={() => { }}
                                        >
                                            <FastImage source={item?.image[0]} style={styles?.featureImageStyle} resizeMode="cover" />
                                        </TouchableOpacity>
                                        <Text style={styles.featureFoodText}>{item?.partnerName}</Text>
                                        <View style={styles.iconStyle}>
                                            <Icons.dotIcon />
                                            <Text>  {item?.availableFoodType[0]}</Text>
                                        </View>
                                    </View>
                                )
                            }}
                            removeClippedSubviews={true}
                            keyExtractor={(item: any, index: any) => index}
                            numColumns={numColumns}
                            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                            ListEmptyComponent={() => (
                                <View style={{ flex: 1, width: "100%", marginHorizontal: 5 }} />
                            )}
                        ></FlatList>
                    </View>
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
        gap: 4
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
    }
})
export default RestaurantSearch