import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Color from '../../core/contstants/Color'
import Fonts from '../../core/contstants/Fonts'
import { Routes } from '../../core/navigation/type'
import { FlatList } from 'native-base'
import { DEV_URL } from '../../core/env/env'
import MostPopularFoodCard from '../../core/component/ui/MostPopularFoodCard'
import { useGetAllFoodListQuery } from '../../service/foodListService'

type Props = {
    navigation: any
}
const Order = ({ navigation }: Props) => {
    const BASE_URL = DEV_URL
    const [foodList, setFoodList] = useState<any | null>(null)
    const [foodListLoading, setFoodListLoading] = useState(false)

    const { data: foodListlData, isLoading: isfoodListlDataLoading, isFetching: isfoodListlDataFetching } = useGetAllFoodListQuery({
        id: "662775e7bf92944c1c5ba33b",
        foodName: "Indian"
    })

    useEffect(() => {
        if (!isfoodListlDataLoading || !isfoodListlDataFetching || foodListlData) {
            setFoodList(foodListlData)
            setFoodListLoading(false)
        } else {
            setFoodListLoading(true)
        }
    }, [foodListlData])


    return (
        <View style={{ padding: 10, gap: 10 }}>
            <View style={{ display: "flex", gap: 10 }}>
                <View style={styles.upcomingView}>
                    <Text style={styles.upcomingTextHeading}>UPCOMING ORDERS</Text>
                    <Text>Clear All</Text>
                </View>
                <View>
                    <FlatList
                        data={foodList}
                        renderItem={({ item }: any) => {
                            return (
                                <MostPopularFoodCard
                                    onPress={() => {
                                        navigation.navigate(Routes.AddToOrder, {
                                            id: item?._id
                                        })
                                    }}
                                    image={`${BASE_URL}/${item.image}`}
                                    foodName={item.name}
                                    foodType={item.foodType}
                                    price={item.price}
                                    description={item.description}
                                />
                            )
                        }}
                        keyExtractor={(item: any,) => item._id?.toString()}
                        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                    ></FlatList>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(Routes.OrderCheckout); // Corrected navigation usage
                    }}
                >
                    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.proceedPaymentText}>Proceed Payment</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={{ gap: 10 }}>
                <View style={styles.upcomingView}>
                    <Text style={styles.upcomingTextHeading}>PAST ORDERS</Text>
                    <Text>Clear All</Text>
                </View>
                <View>
                    <FlatList
                        data={foodList}
                        renderItem={({ item }: any) => {
                            return (
                                <MostPopularFoodCard
                                    onPress={() => {
                                        navigation.navigate(Routes.AddToOrder, {
                                            id: item?._id
                                        })
                                    }}
                                    image={`${BASE_URL}/${item.image}`}
                                    foodName={item.name}
                                    foodType={item.foodType}
                                    price={item.price}
                                    description={item.description}
                                />
                            )
                        }}
                        keyExtractor={(item: any,) => item._id?.toString()}
                        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                    ></FlatList>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    upcomingView: {
        display: "flex",
        flexDirection: "row",
        gap: 2,
        justifyContent: "space-between"

    },
    proceedPaymentText: {
        ...Fonts.style.mds_ui_gothic_font_body_bold,
        color: Color.mds_global_main_Yellow_color,


    },
    upcomingTextHeading: {
        ...Fonts.style.mds_ui_gothic_font_body_semi,
        color: Color.mds_global_gray_color,

    }
})
export default Order
