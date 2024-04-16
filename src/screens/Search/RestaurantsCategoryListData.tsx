import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import images from '../../core/assests/images'
import MostPopularFoodCard from '../../core/component/ui/MostPopularFoodCard'
import FastImage from 'react-native-fast-image'
import Color from '../../core/contstants/Color'
import Fonts from '../../core/contstants/Fonts'
import * as Icon from "../../core/svg"
import Input from '../../core/component/Input/Input'
import { Routes } from '../../core/navigation/type'
const categoryData = [{
    id: 1,
    name: "Chinese",
    image: images?.categoryImage1

},
{
    id: 2,
    name: "Appetizer",
    image: images?.categoryImage2

},
{
    id: 3,
    name: "Mexician",
    image: images?.categoryImage3

},
{
    id: 4,
    name: "Dessert",
    image: images?.categoryImage5

},
{
    id: 5,
    name: "Bakery",
    image: images?.categoryImage6

},
{
    id: 6,
    name: "Burger",
    image: images?.mostPopularlFood3

}, {
    id: 7,
    name: "Main Course",
    image: images?.DesiFoodImage7

},
{
    id: 8,
    name: "Soup",
    image: images?.soupImage1

},

]

const RestaurantsCategoryListData = ({ navigation }: any) => {
    const screenWidth = Dimensions.get('window').width;
    const cardImage = screenWidth / 2 - 15
    console.log("cardImage", cardImage)
    const [searchCategory, setSearchCategory] = useState("")
    const renderItemData = (({ item }: any) => {
        return (
            <View>

                <View style={[styles.categorymainView, { marginHorizontal: 2 }]}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(Routes.searchFoodItems, {
                                categoryName: item?.name
                            })
                        }}
                    >
                        <FastImage
                            source={item?.image}
                            style={[styles.imageStyle, { width: cardImage }]}
                            resizeMode='cover'
                        ></FastImage>
                    </TouchableOpacity>
                    <Text
                        style={styles.categoryText}>
                        {item?.name}
                    </Text>
                </View>
            </View>
        )
    })
    return (
        <View style={[styles.mainView, { paddingHorizontal: 8 }]}>
            <View>
                <Input
                    name=""
                    value={searchCategory}
                    onChangeText={(e) => { setSearchCategory(e) }}
                    placeholder='Search Categories'
                    activeUnderlineColor={Color.mds_global_gray_10_color}
                    underlineColor={Color.mds_global_gray_10_color}
                    textColor={Color.mds_global_gray_color}
                    // leftIcon={}
                    type='outlined'
                    activeOutlineColor={Color.mds_global_gray_color}
                />
            </View>
            {!searchCategory?.length ? <View >
                <Text style={styles.TopRastaurants}>Top Restaurants</Text>
            </View> : null}
            <FlatList
                data={categoryData}
                renderItem={renderItemData}
                removeClippedSubviews={true}
                keyExtractor={(item: any, index: any) => index}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                ListEmptyComponent={() => (
                    <View style={{ flex: 1, width: "100%", marginHorizontal: 5 }} />
                )}
            ></FlatList>
        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle: {
        // width: 160,
        height: 160,
        borderRadius: 10,
    },
    categorymainView: {
        display: "flex",
        flexDirection: "column",
        flex: 1,

        // alignItems: "center",



    },
    categoryText: {
        color: Color.mds_global_white_color,
        position: "absolute",
        top: "40%",
        left: 40,
        fontSize: Fonts.fontSize.body,
        textAlign: "center",
    },
    mainView: {
        display: "flex",
        // borderWidth: 2,
        flex: 1,
        gap: 10,
        paddingVertical: 10
    },
    TopRastaurants: {
        ...Fonts.style.mds_ui_gothic_font_body_bold,
        color: Color.mds_global_black_color,
        fontSize: Fonts.fontSize.body,
        fontWeight: "normal",
        marginTop: 10
    }
})
export default RestaurantsCategoryListData