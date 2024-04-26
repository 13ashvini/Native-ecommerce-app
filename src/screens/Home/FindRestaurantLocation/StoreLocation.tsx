import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../../../core/contstants/Color'
import Fonts from '../../../core/contstants/Fonts'
import Button from '../../../core/component/Buttons/Button'
import * as Icons from "../../../core/svg"
const StoreLocation = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles?.headingView}>
                <Text style={styles.titlestyle}>Find restaurants near you </Text>
                <Text style={styles.textStyle}>Please enter your location or allow access to your location to find restaurants near you.</Text>
            </View>

            <Button
                textStyle={styles.buttonStyle}
                onPress={() => {

                }}
                title={<View
                    style={{ flexDirection: "row", gap: 2, }}
                >
                    <Icons.SendIcon />
                    <Text style={styles.buttonTextStyle}>Use current location</Text>
                </View>}
            ></Button>

            <Text

                style={styles?.policyText}
            >By Signing up you agree to our Terms Conditions & Privacy Policy.</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    titlestyle: {
        ...Fonts.style.mds_ui_gothic_font_heading5_bold,
        color: Color.mds_global_black_color
    },
    textStyle: {
        ...Fonts.style.mds_ui_gothic_font_medium_thin,
        color: Color.mds_global_gray_color,
        lineHeight: 22,

    },
    headingView: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
    },
    mainView: {
        flex: 1,
        padding: 10,
        gap: 15
    },
    createAccountView: {
        display: "flex",
        gap: 8,
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 15
    },
    buttonStyle: {
        color: Color.mds_global_main_Yellow_color,
        backgroundColor: Color.mds_global_white_color,
        ...Fonts.style.mds_ui_font_medium_semi,
        borderWidth: 1,
        borderColor: Color.mds_global_main_Yellow_color,
        margin: 0,
    },
    buttonTextStyle: {
        color: Color.mds_global_main_Yellow_color,
        backgroundColor: Color.mds_global_white_color,
        ...Fonts.style.mds_ui_font_medium_semi,

    },
    policyText: {
        textAlign: "center",
        paddingHorizontal: 15,
        ...Fonts.style.mds_ui_gothic_fonts_footnote_thin
    },
})
export default StoreLocation