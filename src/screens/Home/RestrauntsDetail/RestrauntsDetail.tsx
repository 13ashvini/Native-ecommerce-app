import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';
import * as Icon from "../../../core/svg"
import Color from '../../../core/contstants/Color';
import { allRestaurantsListData } from '../AllRestrauntsList';

const restrauntsDetail = allRestaurantsListData[0]
const RestrauntsDetail = () => {
    const width = Dimensions.get('window').width;

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <FastImage source={item} style={styles?.image} resizeMode="cover" />
            </View>
        );
    }
    return (
        <View>
            <View style={{ display: "flex", gap: 6 }}>
                <Carousel
                    layout={'stack'} layoutCardOffset={`18`}
                    paginationDot={true}
                    data={restrauntsDetail?.image}
                    renderItem={renderItem}
                    sliderWidth={width - 30}
                    itemWidth={width - 30}
                    loop={true}
                // autoplay={true}
                // autoplayInterval={3000}

                />
                <View style={styles.deliveryView}>
                    <FlatList
                        data={restrauntsDetail?.availableFoodType}
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
                </View>
                <View>
                    {restrauntsDetail?.rating && <Text style={styles?.ratingStyle}>{restrauntsDetail?.rating || 1} </Text>}
                    <View style={styles.iconStyle}>
                        <Icon.StarIcon />
                        <Text style={styles?.iconStyle}> Ratings</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.iconStyle}>
                        < Icon.ClockIcon color={Color?.mds_global_gray_color} size={20} />
                        <Text style={styles?.iconStyle}> {restrauntsDetail?.time}</Text>
                    </View>

                    <View style={styles.iconStyle}>
                        <Icon.DollarIcon />
                        <Text>{restrauntsDetail?.delivery}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 185,
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
})
export default RestrauntsDetail