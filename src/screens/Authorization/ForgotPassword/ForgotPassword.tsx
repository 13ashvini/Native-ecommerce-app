import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import Input from '../../../core/component/Input/Input'
import { AuthenticationScreenHeader } from '../../../core/component/ui/AuthenticationScreenHeader'
import Color from '../../../core/contstants/Color'
import Fonts from '../../../core/contstants/Fonts'
import { Routes } from '../../../core/navigation/type'
import Button from '../../../core/component/Buttons/Button'
import { useForgotPasswordMutation } from '../../../service/authService'
import { showMessage } from 'react-native-flash-message'
import { CommonActions } from '@react-navigation/native'
type Props = {
    navigation: any
}
const ForgotPassword = ({ navigation }: any) => {
    const [email, setEmail] = useState("")
    const [ForgotPassword] = useForgotPasswordMutation()
    const [forgotPasswordLoader, setForgotPasswordLoader] = useState(false)

    const forgotPasswordHandle = (
    ) => {

        ForgotPassword({
            email: email
        }).then((res: any) => {
            if (res?.error) {
                setForgotPasswordLoader(false)
                if (res?.error?.data?.message) {
                    setForgotPasswordLoader(false)
                    showMessage({
                        message: (res?.error?.data?.message),
                        type: "danger",
                    });
                } else if (res?.error?.data?.error) (
                    showMessage({
                        message: (res?.error?.data?.error),
                        type: "danger",
                    })
                )
            } else if (res?.data) {
                setForgotPasswordLoader(false)
                // AsyncStorage.setItem("access_token", res?.data?.token)
                if (res?.data?.message) {
                    showMessage({
                        message: (res?.data?.message),
                        type: "success",
                        backgroundColor: Color.mds_global_main_Yellow_color,
                        color: Color.mds_global_white_color,
                    });
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [
                                {
                                    name: Routes.AUTHORIZATIONNAVIGATION,
                                    state: {
                                        routes: [{ name: Routes.RESETEMAIL }],
                                    },
                                },
                            ],
                        }),
                    )

                }
            }
        }).catch(() => {

        })
    }
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
                onPress={forgotPasswordHandle}
                loader={forgotPasswordLoader}
                loaderColor={Color.mds_global_main_Yellow_color}
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