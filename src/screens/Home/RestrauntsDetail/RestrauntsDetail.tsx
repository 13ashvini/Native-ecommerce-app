import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';
import * as Icon from "../../../core/svg"
import Color from '../../../core/contstants/Color';
import { allRestaurantsListData } from '../AllRestrauntsList';
import Button from '../../../core/component/Buttons/Button';
import Fonts from '../../../core/contstants/Fonts';
import MostPopularFoodCard from '../../../core/component/ui/MostPopularFoodCard';
import { Routes } from '../../../core/navigation/type';
import { useRoute } from '@react-navigation/native';
import { DEV_URL } from '../../../core/env/env';
import { Pagination } from 'react-native-snap-carousel'
import { useGetAllFoodListQuery } from '../../../service/foodListService';
import FeaturedCardSkeleton from '../../../core/component/ui/FeaturedCardSkeleton';
import FoodCardSkeleton from '../../../core/component/ui/FoodCardSkeleton';

const restrauntsDetail = allRestaurantsListData

type Props = {
    featuredFoodItems: any[]
    navigation: any
    restaurantsDetailData: any
    restaurantDetailLoading: boolean
}
const RestrauntsDetail = ({ featuredFoodItems,
    navigation,
    restaurantsDetailData,
    restaurantDetailLoading
    // foodList
}: Props) => {
    const width = Dimensions.get('window').width;
    const [index, setIndex] = React.useState(0)
    const BASE_URL = DEV_URL
    const isCarousel = React.useRef(null)
    const routes = useRoute()
    const { restaurantId }: any = routes.params
    const [selectedFoodType, setSelectedFoodType] = useState<any>(restaurantsDetailData?.foodtype[0]?.name); // State to keep track of selected food type
    const [foodList, setFoodList] = useState<any | null>(null)
    console.log("foodList", foodList)
    const [foodListLoading, setFoodListLoading] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    // Function to handle food type selection
    const handleFoodTypeSelection = (foodType: any) => {
        setSelectedFoodType(foodType === selectedFoodType ? "" : foodType);
    };

    // Function to determine if a food type is selected
    const isFoodTypeSelected = (foodType: any) => {
        return foodType === selectedFoodType;
    };

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <FastImage source={{
                    uri: `${BASE_URL}/${item}`
                }} style={styles?.image} resizeMode="cover" />
            </View>
        );
    }
    const { data: foodListlData, isLoading: isfoodListlDataLoading, isFetching: isfoodListlDataFetching } = useGetAllFoodListQuery({
        id: restaurantId,
        foodName: selectedFoodType
    })

    useEffect(() => {
        if (!isfoodListlDataLoading || !isfoodListlDataFetching || foodListlData) {
            setFoodList(foodListlData)
            console.log("foodListlData", foodListlData)
            setFoodListLoading(false)
        } else {
            setFoodListLoading(true)
        }
    }, [foodListlData, selectedFoodType])

    useEffect(() => {
        if (restaurantsDetailData?.foodtype && restaurantsDetailData.foodtype.length > 0) {
            setSelectedFoodType(restaurantsDetailData.foodtype[0]?.name);
        }
    }, [restaurantsDetailData]);
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim])
    const mainRenderItem = () => {
        return (
            <View style={{ display: "flex", gap: 5 }}>
                {restaurantDetailLoading ? <View style={{ display: "flex", gap: 10, padding: 4 }}>
                    <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]}></Animated.View>
                    <Animated.View >
                        <View style={styles.placeholder} />
                        <View style={styles.placeholder} />
                        <View style={styles.placeholder} />
                        <View style={styles.placeholder} />

                    </Animated.View>


                </View> :
                    <View>
                        <View >
                            <Carousel
                                layout={'stack'} layoutCardOffset={`18`}
                                paginationDot={true}
                                data={restaurantsDetailData?.images}
                                renderItem={renderItem}
                                sliderWidth={width}
                                itemWidth={width}
                                loop={true}
                                onItemClick={() => {

                                }}
                                autoplay={true}
                                autoplayInterval={3000}
                                onSnapToItem={(index: any) => setIndex(index)}
                                useScrollView={true}
                            />
                            < Pagination
                                carouselRef={isCarousel}
                                dotsLength={restaurantsDetailData?.images?.length}
                                activeDotIndex={index}
                                dotStyle={styles.dotStyle
                                }
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                                tappableDots={true}
                                containerStyle={styles.paginationContainer} />
                            <TouchableOpacity
                                style={{
                                    // backgroundColor: "#4c5359",
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
                                    <Icon.BackIcon color={"white"} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: "flex", gap: 6, padding: 10 }}>
                            <Text style={styles.partnerNameStyle}
                            >{restaurantsDetailData?.restaurantPartnerName}</Text>
                            <View style={styles.deliveryView}>
                                <FlatList
                                    data={restaurantsDetailData?.foodtype}
                                    horizontal={true}
                                    renderItem={({ item }: any) => {
                                        return (
                                            <View style={styles?.iconStyle}>
                                                <Icon.dotIcon />
                                                <Text >  {item?.name}</Text>
                                            </View>
                                        )
                                    }}
                                    keyExtractor={(item: any, index) => item._id?.toString() + index}
                                    ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                                ></FlatList>
                            </View>
                            <View style={styles.iconStyle}>
                                {restaurantsDetailData?.rating && <Text style={styles?.ratingStyle}>{restaurantsDetailData?.rating || 1} </Text>}
                                <View style={styles.iconStyle}>
                                    <Icon.StarIcon />
                                    <Text style={styles?.iconStyle}> Ratings</Text>
                                </View>
                            </View>
                            <View style={styles.takeWayView}>
                                <View style={styles.iconStyle}>
                                    <View style={styles.iconStyle}>
                                        < Icon.ClockIcon color={Color?.mds_global_main_Yellow_color} size={20} />
                                        <Text style={styles?.iconStyle}> {restaurantsDetailData?.time}</Text>
                                    </View>

                                    <View style={styles.iconStyle}>
                                        <Icon.DollarIcon color={Color.mds_global_main_Yellow_color} />
                                        <Text>{restaurantsDetailData?.deliveryType}</Text>
                                    </View>
                                </View>
                                <Button
                                    textStyle={styles.buttonStyle}
                                    onPress={() => { }}
                                    title={<Text style={styles.buttonTextStyle}>TAKE AWAY</Text>}
                                ></Button>
                            </View>
                        </View>
                    </View>
                }
                {restaurantDetailLoading ? <FeaturedCardSkeleton data={[1, 2, 3, 4, 4]} /> :
                    <View style={{ paddingHorizontal: 10, display: "flex", gap: 5, marginVertical: 5 }}>
                        <View><Text style={styles.FeaturedItemsText}>Featured Items</Text></View>
                        <View>
                            <FlatList
                                data={featuredFoodItems}
                                renderItem={({ item }: any) => {
                                    return (
                                        <View >
                                            <TouchableOpacity
                                                onPress={() => {
                                                    navigation.navigate(Routes.AddToOrder, {
                                                        id: item?.id,
                                                    });
                                                }}
                                            >
                                                <FastImage source={item?.image} style={styles?.featureImageStyle} resizeMode="cover" />
                                            </TouchableOpacity>

                                            <View style={styles.iconStyle}>
                                                <Icon.dotIcon />
                                                <Text>  {item?.foodType}</Text>
                                            </View>
                                            <View style={styles.iconStyle}>
                                                <Text style={{ color: Color.mds_global_main_Yellow_color }}> $$ </Text>
                                                <Text style={{ color: Color.mds_global_main_Yellow_color }}> Aud {item?.price}</Text>
                                            </View>
                                        </View>
                                    )
                                }}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                removeClippedSubviews={true}
                                keyExtractor={(item: any, index: any) => index?.toString()}
                                ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                            ></FlatList>
                        </View>
                    </View>}
                {restaurantDetailLoading ? <FoodCardSkeleton data={[1, 2, 3, 4,]}
                /> :
                    <View style={{ display: "flex", gap: 8 }}>
                        <ScrollView horizontal={true} >
                            <View style={styles.foodCategoriesMainView}>
                                {restaurantsDetailData?.foodtype?.map((food: any) => {
                                    return (
                                        <View>
                                            <View>
                                                <TouchableOpacity
                                                    onPress={() => handleFoodTypeSelection(food?.name)}>
                                                    <Text style={[styles.categoryTypeTex,
                                                    isFoodTypeSelected(food?.name) && styles.activecategoryTypeText
                                                    ]}

                                                    >
                                                        {food?.name}
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                                })}

                            </View>
                        </ScrollView>
                        <View style={{ flex: 1, gap: 5 }}>
                            <Text style={styles.MostPopularText}>
                                Most Popular {selectedFoodType || ""} Food
                            </Text>
                            <View style={{ paddingHorizontal: 10 }}>
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
                                    keyExtractor={(item: any) => item._id?.toString()}
                                    ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                                ></FlatList>
                            </View>


                        </View>

                    </View>
                }

            </View>
        )
    }
    return (
        <FlatList
            data={[1]}
            renderItem={mainRenderItem}
        />

    )
}
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 260,
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
    ratingStyle: {
        backgroundColor: Color.mds_global_main_Yellow_color
        , paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: Color.mds_global_white_color,

    },
    buttonTextStyle: {
        color: Color.mds_global_main_Yellow_color,
        borderWidth: 1,
        padding: 10,
        borderColor: Color.mds_global_main_Yellow_color,
        borderRadius: 10
    },
    buttonStyle: {
        backgroundColor: Color.mds_global_white_color,
        padding: 0,
        marginHorizontal: 0

    },
    takeWayView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        justifyContent: "space-between",
    },
    partnerNameStyle: {
        fontSize: Fonts.fontSize.body,
        fontWeight: "600",
        color: Color.mds_global_black_color,
    },
    FeaturedItemsText: {
        ...Fonts.style.mds_ui_gothic_font_body_thin,
        color: Color.mds_global_black_color
    },
    featureImageStyle: {
        width: 140,
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
    categoryTypeTex: {
        ...Fonts.style.mds_ui_gothic_font_heading6_bold
    },
    activecategoryTypeText: {
        ...Fonts.style.mds_ui_gothic_font_heading6_bold,
        color: Color.mds_global_main_Yellow_color,
        borderBottomWidth: 2,
        borderColor: Color.mds_global_main_Yellow_color
    },
    MostPopularText: {
        fontSize: Fonts.fontSize.body,
        color: Color.mds_global_black_color
    },
    dotStyle: {
        width: 13,
        height: 8,
        borderRadius: 5,
        backgroundColor: 'white',

    },
    paginationContainer: {
        position: 'absolute',
        // alignSelf: 'center',
        bottom: 0,
        right: 0
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
})
export default RestrauntsDetail