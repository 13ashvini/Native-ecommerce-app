import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icon from "../../core/svg"
import Color from '../../core/contstants/Color'
import Fonts from '../../core/contstants/Fonts'
import Button from '../../core/component/Buttons/Button'
import { useGetAllFoodListQuery } from '../../service/foodListService'
import { FlatList } from 'native-base'
import MostPopularFoodCard from '../../core/component/ui/MostPopularFoodCard'
import { Routes } from '../../core/navigation/type'
import { DEV_URL } from '../../core/env/env'
const OrderCheckout = ({ navigation }: any) => {
    const BASE_URL = DEV_URL
    const [foodList, setFoodList] = useState<any>([])
    const [foodListLoading, setFoodListLoading] = useState(false)
    const [subtotal, setSubtotal] = useState(0)
    const { data: foodListlData, isLoading: isfoodListlDataLoading, isFetching: isfoodListlDataFetching } = useGetAllFoodListQuery({
        id: "662775e7bf92944c1c5ba33b",
        foodName: "Indian"
    })
    const deliveryCharge = 10
    useEffect(() => {
        if (!isfoodListlDataLoading || !isfoodListlDataFetching || foodListlData) {
            setFoodList(foodListlData)
            setFoodListLoading(false)
        } else {
            setFoodListLoading(true)
        }
    }, [foodListlData])
    useEffect(() => {
        // Calculate subtotal when foodList changes
        let subtotalValue = 0;
        foodList.forEach((item: any) => {
            subtotalValue += item.price * (item.quantity || 1);

        });
        setSubtotal(subtotalValue);
    }, [foodList]);
    const totalAmount = subtotal + deliveryCharge
    const renderItem = () => {
        return (
            <View style={{ padding: 10, gap: 10 }}>
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
                <View style={{
                    display: "flex",
                    gap: 15,
                    borderBottomColor: Color.mds_global_gray_color,
                    borderBottomWidth: 1,
                    paddingVertical: 12
                }}>
                    <View style={style.subtotalView}>
                        <Text style={style.subtotalText}>SubTotal</Text>
                        <Text style={style.subtotalText}>AUD {subtotal}$</Text>
                    </View>
                    <View style={style.subtotalView}>
                        <Text style={style.subtotalText}>Delivery</Text>
                        <Text style={style.subtotalText}>AUD {deliveryCharge}$</Text>
                    </View>
                    <View style={style.subtotalView}>
                        <Text style={style.totalText}>Total</Text>
                        <Text style={style.totalText}>AUD {totalAmount} $</Text>
                    </View>
                    <View style={style.subtotalView}>
                        <Text style={style.addMoreText}>Add More Items</Text>
                        <Text><Icon.BackIcon /></Text>
                    </View>

                </View>
                <View style={{
                    paddingVertical: 10
                }} >
                    <Button
                        onPress={() => { }}
                        title={<Text style={style.buttonStyle}>Checkout {totalAmount} $</Text>}
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
    subtotalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    subtotalText: {
        ...Fonts.style.mds_ui_gothic_font_body_bold,
        color: Color.mds_global_black_color,
    },
    totalText: {
        ...Fonts.style.mds_ui_gothic_font_body_semi,
        color: Color.mds_global_black_color,
    },
    addMoreText: {
        ...Fonts.style.mds_ui_gothic_font_medium_semi,
        color: Color.mds_global_main_Yellow_color,
    },
    buttonStyle: {
        ...Fonts.style.mds_ui_gothic_font_body_semi,
        color: Color.mds_global_white_color,
    }
})
export default OrderCheckout