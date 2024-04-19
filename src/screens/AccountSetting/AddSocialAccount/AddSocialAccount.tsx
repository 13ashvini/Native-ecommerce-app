import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../../../core/component/Buttons/Button'
import * as Icons from "../../../core/svg"
import Color from '../../../core/contstants/Color'
import Fonts from '../../../core/contstants/Fonts'
const AddSocialAccount = () => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.dontHaveCardText}>
                Add Social Accounts
            </Text>
            <Text style={styles.descriptionText}>
                Add your social accounts for more security. You will go directly to their site.
            </Text>
            <View style={{ display: "flex", gap: 15, marginVertical: 5 }}>
                <Button
                    textStyle={styles.facebookButton}
                    onPress={() => { }}
                    title={<View style={styles.facebookIconView}>
                        <View style={styles.iconStyle}><Icons.FacebookIcon /></View>
                        <Text style={styles.buttonStyle}> Connect With Facebook</Text>
                    </View>}
                ></Button>
                <Button
                    textStyle={styles.googleButton}
                    onPress={() => { }}
                    title={<View style={styles.facebookIconView}>
                        <View style={styles.iconStyle}><Icons.FacebookIcon /></View>
                        <Text style={styles.buttonStyle}> Connect With Google</Text>
                    </View>}
                ></Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,

    },
    policyText: {
        textAlign: "center",
        padding: 10,
        ...Fonts.style.mds_ui_gothic_fonts_footnote_thin
    },
    facebookButton: {
        backgroundColor: Color.mds_global_darkblue_color,
        borderRadius: 8,
        padding: 5

    },
    googleButton: {
        backgroundColor: Color.mds_global_main_Blue_color,
        borderRadius: 8,
        padding: 5,

    },
    facebookIconView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,

    },
    iconStyle: {
        backgroundColor: Color.mds_global_white_color,
        height: 28,
        width: 28,
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2
    },
    buttonStyle: {
        color: Color.mds_global_white_color,
        ...Fonts.style.mds_ui_font_medium_semi,
    },
    dontHaveCardText: {
        ...Fonts.style.mds_ui_gothic_font_heading6_bold
    },
    descriptionText: {
        ...Fonts.style.mds_ui_gothic_font_medium_thin,
        textAlign: "center"
    },
})
export default AddSocialAccount