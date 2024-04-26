import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import images from '../../assests/images'
import FastImage from 'react-native-fast-image'
import * as Icon from "../../svg"
import Color from '../../contstants/Color'
import Fonts from '../../contstants/Fonts'
type Props = {
    image: any,
    foodName: string,
    description: string,
    foodType: string,
    price: string,
    onPress: () => void
}
const MostPopularFoodCard = (
    { image,
        foodName,
        description,
        foodType,
        price,
        onPress }: Props
) => {
    return (
        <View style={styles.mainView}>
            <View

            >
                <TouchableOpacity
                    onPress={onPress}>
                    <FastImage

                        source={{
                            uri: image
                        }}
                        style={styles.imageStyle}
                        resizeMode='cover'
                    />
                </TouchableOpacity>

            </View>
            <View style={{ flex: 1, gap: 2 }} >
                <Text

                    style={styles.foodName}>
                    {foodName}
                </Text>
                <Text style={styles.descriptionText}>
                    {description}
                </Text>
                <View style={styles.cardTextStyle}>
                    <View style={styles.iconStyle}>
                        <Text>$$</Text>
                        <Icon.dotIcon />
                        <Text>{foodType}</Text>
                    </View>
                    <View>
                        <Text style={{
                            color: Color.mds_global_main_Yellow_color,
                        }}>Aud $ {price}</Text>

                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle: {
        width: 110,
        height: 110,
        borderRadius: 10
    },
    cardTextStyle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10
    },
    iconStyle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    mainView: {
        flexDirection: "row",
        flex: 1,
        gap: 7,
        width: "100%",
        backgroundColor: "white",
        padding: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2
    },
    descriptionText: {
        lineHeight: 20
    },
    foodName: {
        fontSize: Fonts.fontSize.body,
        color: Color.mds_global_black_color
    }

})
export default MostPopularFoodCard