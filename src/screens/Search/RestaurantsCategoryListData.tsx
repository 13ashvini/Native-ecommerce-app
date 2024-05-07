import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import images from '../../core/assests/images'
import MostPopularFoodCard from '../../core/component/ui/MostPopularFoodCard'
import FastImage from 'react-native-fast-image'
import Color from '../../core/contstants/Color'
import Fonts from '../../core/contstants/Fonts'
import * as Icon from "../../core/svg"
import Input from '../../core/component/Input/Input'
import { Routes } from '../../core/navigation/type'
import { useGetRestaurantByIdQuery, useGetRestaurantCategoryByIdQuery } from '../../service/RestaurantService'
import { useRoute } from '@react-navigation/native'
import { DEV_URL } from '../../core/env/env'


const RestaurantsCategoryListData = ({ navigation }: any) => {
    const BASE_URL = DEV_URL
    const screenWidth = Dimensions.get('window').width;
    const cardImage = screenWidth / 2 - 15
    const [searchCategory, setSearchCategory] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [loadingCategory, setLoadingCategory] = useState(false)
    const [hasMoreData, setHasMoreData] = useState(true);
    const [categoryListData, setCategoryListData] = useState<any[]>([])
    const routes = useRoute()
    // @ts-ignore
    const { id } = routes?.params
    const categoryLimit = 4
    const { data: categoryList, isLoading: isiscategoryListDataLoading, isFetching: isiscategoryListDataFetching } = useGetRestaurantCategoryByIdQuery
        (
            id
        )
    useEffect(() => {
        // @ts-ignore
        let categoryListById = categoryList
        let Categorylimit = 6
        if (categoryList) {
            // @ts-ignore

            setCategoryListData(categoryList?.data);

            // if (currentPage === 1) {
            //     // @ts-ignore
            //     setCategoryListData(categoryListById || []);
            // } else {
            //     // @ts-ignore
            //     setCategoryListData(prevData => [...prevData, ...categoryListById]);
            // }
            // // @ts-ignore
            // setHasMoreData(categoryListById && categoryListById?.length === Categorylimit);
            // setLoadingCategory(false);

        } else {
            setLoadingCategory(true);
        }
    }, [categoryList, searchCategory]);

    const handleLoadMore = () => {
        if (!isiscategoryListDataLoading && !isiscategoryListDataFetching && hasMoreData) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };
    const renderItemData = (({ item }: any) => {
        return (
            <View>

                <View style={[styles.categorymainView, { marginHorizontal: 2 }]}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(Routes.searchFoodItems, {
                                categoryName: item?.name,
                                restaurantId: id
                            })
                        }}
                    >
                        <FastImage
                            source={{
                                uri: `${BASE_URL}/${item?.image}`
                            }}
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
                    onChangeText={(e) => {
                        setSearchCategory(e);
                        setCurrentPage(1)
                    }}
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
                <Text style={styles.TopRastaurants}>Top Category</Text>
            </View> : null}
            <FlatList
                data={categoryListData}
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