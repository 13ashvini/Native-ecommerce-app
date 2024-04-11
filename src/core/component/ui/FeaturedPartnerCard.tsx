import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import images from '../../assests/images';
import Color from '../../contstants/Color';
import Fonts from '../../contstants/Fonts';
type Props = {
    image: any
    partnerName: string
    location: string
    rating: string
    time: string
    delivery: string
}
const FeaturedPartnerCard = ({
    image,
    partnerName,
    location,
    rating,
    time,
    delivery,
}: Props) => {
    return (
        <View>
            <View style={styles.FeaturedPartnerMainView}>
                <FastImage source={image} style={styles?.image} resizeMode="cover"/>
                <Text style={styles.partnerNameStyle}>{partnerName}</Text>
                <Text>{location}</Text>
                <View style={styles.deliveryView}>
                   {rating && <Text style={styles.ratingStyle}>{rating || 1} </Text> } 
                    <Text>{time}</Text>
                    <Text>{delivery}</Text>
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
        gap: 10
    },
    image: {
        width: "100%",
        height: 160,
        borderRadius: 10,
    },
    ratingStyle:{
        backgroundColor:Color.mds_global_main_Yellow_color
        ,paddingVertical:2,
        paddingHorizontal:10 ,
        borderRadius:10,
        color:Color.mds_global_white_color,
        
    },
    partnerNameStyle :{
        fontSize:Fonts.fontSize.body,
        fontWeight: "normal",
        color: Color.mds_global_black_color,
        
        // ...Fonts.style.mds_ui_gothic_font_heading6_thin,
    }

})
export default FeaturedPartnerCard