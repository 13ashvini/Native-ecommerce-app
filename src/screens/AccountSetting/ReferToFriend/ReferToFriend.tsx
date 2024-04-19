import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../../../core/contstants/Color'
import Fonts from '../../../core/contstants/Fonts'
import Button from '../../../core/component/Buttons/Button'
import FastImage from 'react-native-fast-image'
import images from '../../../core/assests/images'
import * as Icons from "../../../core/svg"
import { Alert, Share } from 'react-native'
const ReferToFriend = () => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: `https://ui8.net/76738b`
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };
    return (
        <View style={styles.mainView} >
            <View style={{ display: "flex", gap: 15, alignItems: "center" }}>
                <FastImage
                    style={styles.imageStyle}
                    source={images.PaymentCardImage}
                    resizeMode='cover'
                />
                <Text style={styles.dontHaveCardText}>
                    Refer a Friend, Get $10
                </Text>
                <Text style={styles.descriptionText}>
                    Get $10 in credits when someone sign up using your refer link </Text>
                <Button
                    textStyle={styles.buttonStyle}
                    onPress={() => { onShare() }}
                    title={<View
                        style={styles.buttonView}
                    >
                        <Icons.ShareArrowIcon />
                        <Text style={styles.buttonTextStyle}>https://ui8.net/76738b</Text>
                    </View>}
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
        ...Fonts.style.mds_ui_gothic_font_medium_thin,
        textAlign: "center"
    },
    buttonTextStyle: {
        color: Color.mds_global_black_color,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    buttonStyle: {
        backgroundColor: "#F8F8F8",


    },
    buttonView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
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
export default ReferToFriend