import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import images from '../../assests/images';
import Color from '../../contstants/Color';
import Fonts from '../../contstants/Fonts';
import Carousel from 'react-native-snap-carousel';
import * as Icon from "../../svg/"
type Props = {
    image: any
    partnerName: string
    location: string
    rating: string
    time: string
    delivery: string
    availableFoodType: any
    ratingNumber: string
    onPress: () => void
}
const AllRestaurantsCard = ({
    image,
    partnerName,
    location,
    rating,
    time,
    delivery,
    availableFoodType,
    ratingNumber,
    onPress
}: Props) => {
    const width = Dimensions.get('window').width;
    const DotIcon = Icon.dotIcon
    const DollarIcon = Icon?.DollarIcon
    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                // width: '100%'

            }}>
                <FastImage source={item} style={styles?.image} resizeMode="cover" />
            </View>
        );
    }
    return (
        <View>
            <View style={styles.FeaturedPartnerMainView}>

                <Carousel
                    layout={'stack'} layoutCardOffset={`18`}
                    paginationDot={true}
                    data={image}
                    renderItem={renderItem}
                    sliderWidth={width - 30}
                    itemWidth={width - 30}
                    loop={true}
                // autoplay={true}
                // autoplayInterval={3000}

                />
                <Text style={styles.partnerNameStyle}
                    onPress={onPress}
                >{partnerName}</Text>
                <Text>{location}</Text>
                <View style={styles.deliveryView}>
                    {/* <Text>$$</Text> */}
                    <FlatList
                        data={availableFoodType}
                        horizontal={true}

                        renderItem={({ item }: any) => {
                            return (
                                <View >
                                    <Text style={styles?.iconStyle}>  <Text ><DotIcon /></Text> {item}</Text>
                                </View>
                            )
                        }}
                        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                    ></FlatList>
                </View>
                <View style={styles.deliveryView}>
                    {rating && <Text style={styles.ratingStyle}>{rating || 1} </Text>}
                    <View style={styles.iconStyle}>
                        <Icon.StarIcon />
                        <Text style={styles?.iconStyle}>{ratingNumber}+ Ratings</Text>
                    </View>
                    <View style={styles.iconStyle}>
                        < Icon.ClockIcon color={Color?.mds_global_gray_color} size={20} />
                        <Text style={styles?.iconStyle}> {time}</Text>
                    </View>

                    <View style={styles.iconStyle}>
                        <DollarIcon />
                        <Text>{delivery}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    FeaturedPartnerMainView: {
        display: "flex",
        flexDirection: "column",
        gap: 4,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 1,

    },
    deliveryView: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: 185,
        borderRadius: 10,
    },
    ratingStyle: {
        backgroundColor: Color.mds_global_main_Yellow_color
        , paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: Color.mds_global_white_color,

    },
    partnerNameStyle: {
        fontSize: Fonts.fontSize.body,
        fontWeight: "normal",
        color: Color.mds_global_black_color,

        // ...Fonts.style.mds_ui_gothic_font_heading6_thin,
    },

    iconStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    }
})
export default AllRestaurantsCard