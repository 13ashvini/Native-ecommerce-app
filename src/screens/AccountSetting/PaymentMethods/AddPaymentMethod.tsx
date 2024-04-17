import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import images from '../../../core/assests/images'
import Fonts from '../../../core/contstants/Fonts'
import Button from '../../../core/component/Buttons/Button'
import Color from '../../../core/contstants/Color'
import { Routes } from '../../../core/navigation/type'
const AddPaymentMethod = ({ navigation }: any) => {
    return (
        <View style={styles.mainView} >
            <View style={{ display: "flex", gap: 15, alignItems: "center" }}>
                <FastImage
                    style={styles.imageStyle}
                    source={images.PaymentCardImage}
                    resizeMode='cover'
                />
                <Text style={styles.dontHaveCardText}>
                    Don’t have any card
                </Text>
                <Text style={styles.descriptionText}>
                    It’s seems like you have not added any credit or debit card. You may easily add card.
                </Text>
                <Button
                    textStyle={styles.buttonStyle}
                    onPress={() => { navigation.navigate(Routes.PaymentMethod) }}
                    title={<Text style={styles.buttonTextStyle}>ADD CREDIT CARDS</Text>}
                ></Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle: {
        width: 150,
        height: 123.37
    },
    dontHaveCardText: {
        ...Fonts.style.mds_ui_gothic_font_heading6_bold
    },
    descriptionText: {
        ...Fonts.style.mds_ui_gothic_font_medium_thin
    },
    buttonTextStyle: {
        color: Color.mds_global_main_Yellow_color,
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 20,
        borderColor: Color.mds_global_main_Yellow_color,
        borderRadius: 5
    },
    buttonStyle: {
        backgroundColor: Color.mds_global_white_color,
        padding: 0,
        marginHorizontal: 0

    },
    mainView: {
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        textAlign: "center",
        alignContent: "center"

    }

})
export default AddPaymentMethod