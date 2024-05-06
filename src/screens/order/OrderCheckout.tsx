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
import { useGetUserOrderListQuery } from '../../service/orderService'
const OrderCheckout = ({ navigation }: any) => {
    const BASE_URL = DEV_URL
    const [subtotal, setSubtotal] = useState(0)
    const [orderListData, setOrderListData] = useState<any[]>([])
    const [foodListLoading, setFoodListLoading] = useState(false)
    const deliveryCharge = 0
    const { data: orderlist, isLoading: isOrderlistLoading, isFetching: isOrderlistFetching } = useGetUserOrderListQuery("")
    useEffect(() => {
        if (!isOrderlistLoading || !isOrderlistFetching || orderlist) {
            // @ts-ignore
            setOrderListData(orderlist)
            console.log("orderlist=-=-=-=", orderlist)

            setFoodListLoading(false)
        } else {
            setFoodListLoading(true)
        }
    }, [orderlist])
        ;
    useEffect(() => {
        // Calculate subtotal when orderListData changes
        const subtotalValue = orderListData.reduce((accumulator, item) => {
            return accumulator + parseFloat(item.total);
        }, 0);
        setSubtotal(subtotalValue);
    }, [orderListData]);
    const totalAmount = subtotal + deliveryCharge
    const renderItem = () => {
        return (
            <View style={{ padding: 10, gap: 10 }}>
                <View>
                    <FlatList
                        data={orderListData}
                        renderItem={({ item }: any) => {
                            return (
                                <MostPopularFoodCard
                                    onPress={() => {
                                        navigation.navigate(Routes.AddToOrder, {
                                            id: item?._id
                                        })
                                    }}
                                    image={`${BASE_URL}/${item.items[0]?.image}`}
                                    foodName={item?.items[0]?.name}
                                    foodType={item.foodType}
                                    price={item?.items[0].price}
                                    description={item?.items[0]?.description}
                                    quntity={item?.items[0]?.quantity}

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
                        onPress={() => {
                            navigation.navigate(Routes.Profile, {
                                screen: Routes.AddPaymentMethods
                            })
                        }}
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