import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Icon from "../../../core/svg"

import Color from '../../../core/contstants/Color'
import Fonts from '../../../core/contstants/Fonts'
import FastImage from 'react-native-fast-image'
import Button from '../../../core/component/Buttons/Button'
import { useRoute } from '@react-navigation/native';
import { useGetFoodDetailByIdQuery } from '../../../service/foodListService'
import { DEV_URL } from '../../../core/env/env'
import { useAddUserOrderMutation } from '../../../service/orderService'
import { showMessage } from 'react-native-flash-message'
import RestaurantsSkeleton from '../../../core/component/ui/RestaurantsSkeleton'
import { ScrollView } from 'native-base'
type Props = {
    id: string
}
const AddToOrder = ({ navigation }: any) => {
    // const restrauntsDetail = allRestaurantsListData[0]
    const [quantityCounnt, setQountityCount] = useState(1)
    const [foodDetail, setFoodDetail] = useState<any | null>(null)
    const [loading, setLoading] = useState(false)
    const route = useRoute();
    const BASE_URL = DEV_URL
    const [addToOrderLoader, setAddToOrderLoader] = useState(false)
    const [addToOrder] = useAddUserOrderMutation()
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    // @ts-ignore
    const { id } = route.params;

    const { data: foodDetailData, isLoading: isfoodDetailDataLoading, isFetching: isfoodDetailDataFetching } = useGetFoodDetailByIdQuery(id)

    useEffect(() => {
        if (!isfoodDetailDataLoading || !isfoodDetailDataFetching || foodDetailData) {
            // @ts-ignore
            setFoodDetail(foodDetailData?.data)

            setLoading(false)
        } else {
            setLoading(true)
        }
    }, [foodDetailData])
    const handleAddToOrder = (
    ) => {
        setAddToOrderLoader(true)

        const formattedValue = {
            id: id,
            quantity: quantityCounnt
        }
        addToOrder(formattedValue).then((res: any) => {

            if (res?.error) {
                setAddToOrderLoader(false)
                if (res?.error?.data?.message) {
                    setAddToOrderLoader(false)
                    showMessage({
                        message: (res?.error?.data?.message),
                        type: "danger",
                    });
                } else if (res?.error?.data?.error) (
                    showMessage({
                        message: (res?.error?.data?.error),
                        type: "danger",
                    })
                )
            } else if (res?.data) {
                setAddToOrderLoader(false)
                if (res?.data?.message) {
                    showMessage({
                        message: (res?.data?.message),
                        type: "success",
                        backgroundColor: Color.mds_global_main_Yellow_color,
                        color: Color.mds_global_white_color,
                    });


                }
            }
        }).catch(() => {

        })
    }


    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim])
    const checkoutAmout = foodDetail?.price * quantityCounnt
    const win = Dimensions.get('window');
    return (
        <ScrollView>
            <View>
                {loading ?
                    <View style={{ display: "flex", gap: 10, padding: 4 }}>
                        <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]}></Animated.View>
                        <Animated.View >
                            <View style={styles.placeholder} />
                            <View style={styles.placeholder} />
                            <View style={styles.placeholder} />
                            <View style={styles.placeholder} />

                        </Animated.View>
                        <Animated.View
                            style={{
                                flexDirection: "row",
                                gap: 15,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <View style={styles.countSkeleton} />
                            <View style={styles.countSkeleton} />
                            <View style={styles.countSkeleton} />


                        </Animated.View>

                    </View>
                    :
                    <View>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <FastImage source={{
                                uri: `${BASE_URL}/${foodDetail?.image}`
                            }} style={{
                                width: win.width,
                                flex: 1,
                                height: 182,
                                aspectRatio: 10,

                            }} resizeMode="contain" />
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.goBack();
                                }}
                                style={{
                                    backgroundColor: "#4c5359",
                                    height: 34,
                                    width: 34,
                                    borderRadius: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "absolute",
                                    top: 15,
                                    left: 15
                                }}
                            >
                                <View>
                                    <Icon.CancelIcon />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textContentView}>
                            <Text style={styles.partnerNameStyle}
                            >{foodDetail?.name}</Text>
                            <Text style={styles.descriptionText}>
                                {foodDetail?.description}
                            </Text>
                            <View style={styles?.iconStyle}>
                                <Text>$$</Text>
                                <Icon.dotIcon />
                                <Text >  {foodDetail?.foodtype}</Text>
                            </View>
                            <Text style={styles.priceTextStyle}>
                                Aud $ {foodDetail?.price}
                            </Text>

                            {/* <View style={styles.deliveryView}>
                            <FlatList
                                data={foodDetail?.foodtype}
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
                                        loaderColor={Color.mds_global_main_Yellow_color}
                                        loader={addToOrderLoader}
                                        onPress={handleAddToOrder}
                                        title={<Text style={styles.buttonTextStyle}>ADD TO ORDER (Aud $ {checkoutAmout})</Text>}
                                    >

                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>}
            </View>
        </ScrollView>

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
    },
    skeletonImage: {
        backgroundColor: '#ccc',
        // animationStyle: "Wave",
        // flex: 1,
        borderRadius: 10,
        width: '100%',
        height: 185,
    },
    container: {
        backgroundColor: '#F6F6F6',
        borderRadius: 13,
        padding: 16,
        marginBottom: 16,
        marginTop: 50,
    },
    // waveAnimation: {
    //     animationName: 'wave',
    //     animationDuration: '2s',
    //     animationIterationCount: 'infinite',
    //     animationTimingFunction: 'linear',
    // },
    placeholder: {
        backgroundColor: '#ccc',
        height: 16,
        borderRadius: 4,
        marginBottom: 8,
    },
    countSkeleton: {
        backgroundColor: '#ccc',
        height: 25,
        width: 25,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    }
})
export default AddToOrder