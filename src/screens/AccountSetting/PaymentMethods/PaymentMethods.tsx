import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Fonts from '../../../core/contstants/Fonts'
import Color from '../../../core/contstants/Color'
import * as Icon from "../../../core/svg"
import FastImage from 'react-native-fast-image'
import images from '../../../core/assests/images'
const PaymentMethods = () => {
    return (
        <View style={{ padding: 10 }}>

            <View style={{ marginTop: 8, display: "flex", gap: 15 }}>
                <View style={styles.BackIconView}>
                    <View style={styles.iconStyle}>
                        <FastImage
                            source={images.PaypalImage}
                            style={styles.cardImage}
                            resizeMode='contain'
                        />
                        <View>
                            <Text style={styles.titleTextStyle}>PayPal</Text>
                            <Text>Default Image</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {
                            // navigation.navigate(Routes.ChangeProfileSetting)
                        }}>
                            <Icon.BackIcon />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.BackIconView}>
                    <View style={styles.iconStyle}>
                        <FastImage
                            source={images.MasterCardImage}
                            style={styles.cardImage}
                            resizeMode='contain'
                        />
                        <View>
                            <Text style={styles.titleTextStyle}>Master Card</Text>
                            <Text>Change your password</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {
                            // navigation.navigate(Routes.ChangePasswordSetting)
                        }}>
                            <Icon.BackIcon />
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={styles.BackIconView}>
                    <View style={styles.iconStyle}>
                        <FastImage
                            source={images.VisaCardImage}
                            style={styles.cardImage}
                            resizeMode='contain'
                        />
                        <View>
                            <Text style={styles.titleTextStyle}>Visa</Text>
                            <Text>Add your credit & debit cards</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {
                            // navigation.navigate(Routes.AddPaymentMethods)
                        }}>
                            <Icon.BackIcon />
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    iconStyle: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    titleTextStyle: {
        ...Fonts.style.mds_ui_gothic_font_medium_bold,
        color: Color.mds_global_black_color
    },
    BackIconView: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.4,
        paddingVertical: 10,
        borderBottomColor: Color.mds_global_gray_10_color
    },
    singlebackIcon: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,

    },
    cardImage: {
        width: 40,
        height: 35
    }
})
export default PaymentMethods