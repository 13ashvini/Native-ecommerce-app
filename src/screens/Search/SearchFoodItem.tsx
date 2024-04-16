import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MostPopularFood, RestaurantsFeaturedItem, Seafood, appetizers, desiMainCourses, desserts, soups } from '../Home/RestrauntsDetail/RestaurantWrapper'
import { useRoute } from '@react-navigation/native'
import MostPopularFoodCard from '../../core/component/ui/MostPopularFoodCard'
import { Routes } from '../../core/navigation/type'
import Fonts from '../../core/contstants/Fonts'
import Color from '../../core/contstants/Color'

const SearchFoodItem = ({ navigation }: any) => {
    const [foodDetailData, setFoodDetailData] = useState<any[]>([])
    const MostPopularFoodData = MostPopularFood
    const SeafoodData = Seafood
    const appetizersFood = appetizers
    const desiMainCoursesData = desiMainCourses
    const dessertsData = desserts
    const soupsData = soups
    const RestaurantsFeaturedItemData = RestaurantsFeaturedItem
    const route = useRoute();
    // @ts-ignore
    const { categoryName } = route.params;
    console.log("categoryName", categoryName)
    const ConcatedData = MostPopularFoodData.concat(SeafoodData).concat(appetizersFood).concat(desiMainCoursesData).concat(dessertsData).concat(soupsData).concat(RestaurantsFeaturedItemData)
    console.log("ConcatedData----", ConcatedData)
    useEffect(() => {
        const categoryFilterData = ConcatedData.filter((item: any) => {
            return item?.category?.toUpperCase().includes(categoryName?.toUpperCase())
        })
        setFoodDetailData(categoryFilterData)
    }, [])
    console.log("foodDetailData---------------------", foodDetailData)
    return (
        // <View>
        <View style={{ flex: 1, gap: 10, padding: 5, paddingHorizontal: 10 }}>
            <View style={styles.featuredPartnerView}>
                <Text style={styles.featuredPartnertext}>We Have Found {foodDetailData?.length} result from {categoryName} </Text>
                <Text style={styles.seeAllText}
                    onPress={() => {
                        navigation.navigate(Routes.RestaurantCategorySearch)
                    }}
                >Search Again</Text>
            </View>
            <FlatList
                data={foodDetailData}
                renderItem={({ item }: any) => {
                    return (
                        <MostPopularFoodCard
                            onPress={() => {
                                navigation.navigate(Routes.AddToOrder, {
                                    id: item?.id
                                })
                            }}
                            image={item.image}
                            foodName={item.foodName}
                            foodType={item.foodType}
                            price={item.price}
                            description={item.description}
                        />
                    )
                }}
                keyExtractor={(item: any) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
            ></FlatList>


        </View>
        // </View >
    )
}
const styles = StyleSheet.create({
    MostPopularText: {
        ...Fonts.style.mds_ui_gothic_font_heading6_bold,
        color: Color.mds_global_black_color,
        textAlign: 'center'
    },
    textView:
    {
        display: "flex",
        flexDirection: "row",
        gap: 1,
        flexWrap: "wrap",
        justifyContent: "space-between"
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
        gap: 10,
        flex: 1
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
})
export default SearchFoodItem