import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Icon from "../../../core/svg"
import { allRestaurantsListData } from '../AllRestrauntsList'
import Color from '../../../core/contstants/Color'
import Fonts from '../../../core/contstants/Fonts'
import FastImage from 'react-native-fast-image'
import Button from '../../../core/component/Buttons/Button'
import { useRoute } from '@react-navigation/native';
import { MostPopularFood, RestaurantsFeaturedItem, Seafood, appetizers, desiMainCourses, desserts, soups } from '../RestrauntsDetail/RestaurantWrapper'
type Props = {
    id: string
}
const AddToOrder = () => {
    // const restrauntsDetail = allRestaurantsListData[0]
    const [quantityCounnt, setQountityCount] = useState(1)
    const [foodDetailData, setFoodDetailData] = useState<any | null>(null)
    const MostPopularFoodData = MostPopularFood
    const SeafoodData = Seafood
    const appetizersFood = appetizers
    const desiMainCoursesData = desiMainCourses
    const dessertsData = desserts
    const soupsData = soups
    const RestaurantsFeaturedItemData = RestaurantsFeaturedItem
    const route = useRoute();
    // @ts-ignore
    const { id } = route.params;
    const ConcatedData = MostPopularFoodData.concat(SeafoodData).concat(appetizersFood).concat(desiMainCoursesData).concat(dessertsData).concat(soupsData).concat(RestaurantsFeaturedItemData)


    useEffect(() => {
        const data = ConcatedData.filter((item: any) => {
            return item?.id == id
        });
        setFoodDetailData(data[0])

    }, [id, ConcatedData]);
    return (
        <View>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <FastImage source={foodDetailData?.image} style={styles?.image} resizeMode="cover" />
            </View>
            <View style={styles.textContentView}>
                <Text style={styles.partnerNameStyle}
                >{foodDetailData?.foodName}</Text>
                <Text style={styles.descriptionText}>
                    {foodDetailData?.description}
                </Text>
                <View style={styles?.iconStyle}>
                    <Text>$$</Text>
                    <Icon.dotIcon />
                    <Text >  {foodDetailData?.foodType}</Text>
                </View>
                <Text style={styles.priceTextStyle}>
                    Aud $ {foodDetailData?.price}
                </Text>
                {/* <View style={styles.deliveryView}>
                    <FlatList
                        data={foodDetailData?.availableFoodType}
                        horizontal={true}
                        renderItem={({ item }: any) => {
                            return (
                                <View style={styles?.iconStyle}>
                                    <Icon.dotIcon />
                                    <Text >  {item}</Text>
                                </View>
                            )
                        }}
                        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                    ></FlatList>
                </View> */}
                <View >
                    <View style={styles.incrementItmeView} >
                        <TouchableOpacity
                            onPress={() => {
                                if (quantityCounnt > 1) { // Check if quantity count is greater than 1
                                    setQountityCount(quantityCounnt - 1)
                                }
                            }}
                            style={styles.incrementButton}
                        >
                            <Text style={styles.incrementTextStyle}> - </Text>
                        </TouchableOpacity>
                        <Text style={styles.incrementTextStyle}>{quantityCounnt}</Text>
                        <TouchableOpacity
                            style={styles.incrementButton}
                        >
                            <Text
                                onPress={() => {
                                    setQountityCount(quantityCounnt + 1)
                                }}
                                style={styles.incrementTextStyle}
                            > + </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Button
                            onPress={() => { }}
                            title={<Text style={styles.buttonTextStyle}>ADD TO ORDER (Aud $ {foodDetailData?.price})</Text>}
                        >

                        </Button>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
        borderRadius: 10,

    },
    deliveryView: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    iconStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    partnerNameStyle: {
        fontSize: Fonts.fontSize.body,
        fontWeight: "600",
        color: Color.mds_global_black_color,
    },
    textContentView: {
        display: "flex",
        gap: 5,
        padding: 13
    },
    descriptionText: {
        lineHeight: 20
    },
    incrementButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        borderWidth: 1,
        borderColor: "#979797"
    },
    incrementItmeView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        margin: 5
    },
    incrementTextStyle: {
        fontSize: Fonts.fontSize.h6,
        color: Color.mds_global_black_color,
    },
    buttonTextStyle: {
        color: Color.mds_global_white_color
    },
    priceTextStyle:
    {
        color: Color.mds_global_main_Yellow_color,
        ...Fonts.style.mds_ui_gothic_font_medium_bold
    }
})
export default AddToOrder