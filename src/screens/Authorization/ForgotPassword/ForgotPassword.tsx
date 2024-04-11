import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import Input from '../../../core/component/Input/Input'
import { AuthenticationScreenHeader } from '../../../core/component/ui/AuthenticationScreenHeader'
import Color from '../../../core/contstants/Color'
import Fonts from '../../../core/contstants/Fonts'
import { Routes } from '../../../core/navigation/type'
import Button from '../../../core/component/Buttons/Button'
type Props = {
    navigation: any
}
const ForgotPassword = ({ navigation }: any) => {
    const [email, setEmail] = useState("")
    return (
        <View style={styles.mainView}>
            <AuthenticationScreenHeader
                title='Forgot password'
                text="Enter your email address and we will send you a reset instructions."
            />
            <View style={styles.viewStyle}>
                <Input
                    name=""
                    value={email}
                    onChangeText={(e) => { setEmail(e) }}
                    label='EMAIL ADDRESS'
                    activeUnderlineColor={Color.mds_global_gray_color}
                    underlineColor={Color.mds_global_gray_color}
                    textColor={Color.mds_global_black_color}
                />

            </View>

            <Button
                onPress={() => {
                    navigation.navigate(Routes.AUTHORIZATIONNAVIGATION, {
                        screen: Routes.RESETEMAIL
                    })
                }}
                title={<Text style={styles.buttonStyle}>RESET PASSWORD</Text>}

            ></Button>

        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        display: "flex",
        flexDirection: "column",
        gap: 18,
        padding: 18
    },
    viewStyle: {
        display: "flex",
        flexDirection: "column",
        gap: 12
    },

    buttonStyle: {
        color: Color.mds_global_white_color,
        ...Fonts.style.mds_ui_font_medium_semi,
    },




})
export default ForgotPassword