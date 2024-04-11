import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import Color from '../../contstants/Color';
import Fonts from '../../contstants/Fonts';
import * as Icons from "../../svg";
type Props = {
    image: any
    partnerName: string
    location: string
    rating: string
    time: string
    delivery: string
}
const AllPartnercCard = ({
    image,
    partnerName,
    location,
    rating,
    time,
    delivery,
}: Props) => {
    return (
        <View style={{ marginHorizontal: 7, flex: 1 }}>
            <View style={styles.FeaturedPartnerMainView}>
                <FastImage source={image} style={styles?.image} resizeMode="cover" />
                <View style={styles.timeView}>
                    <View style={styles.iconStyle}>
                        <Icons.ClockIcon />
                        <Text style={{ color: Color.mds_global_white_color }}>{time}</Text>
                    </View>
                    <View style={styles.deliveryView}>
                        <View style={[styles.iconStyle,]} >
                            <Icons.DollarIcon color='white' size={16} />
                            <Text style={{ color: Color.mds_global_white_color }}>{delivery}</Text>
                        </View>
                        {rating && <Text style={styles.ratingStyle}>{rating || 1} </Text>}
                    </View>
                </View>
                <Text style={styles.partnerNameStyle}>{partnerName}</Text>
                <Text>{location}</Text>

            </View>
        </View >
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
        position: "relative"

    },
    deliveryView: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between",
        width: '98%'
    },
    image: {
        width: "100%",
        height: 280,
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
        paddingHorizontal: 5,
        gap: 3

    },
    timeView: {
        position: 'absolute',
        bottom: 60,
        display: 'flex',
        gap: 5
    }
})
export default AllPartnercCard