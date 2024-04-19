import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Routes } from '../../../core/navigation/type'
import * as Icons from "../../../core/svg"
import { AuthenticationScreenHeader } from '../../../core/component/ui/AuthenticationScreenHeader'
import Input from '../../../core/component/Input/Input'
import Color from '../../../core/contstants/Color'
import Fonts from '../../../core/contstants/Fonts'
import Button from '../../../core/component/Buttons/Button'
import { CommonActions } from '@react-navigation/native'

type Props = {
    navigation: any
}
const Login: React.FC<Props> = ({ navigation }) => {
    const FacebookIcon = Icons.FacebookIcon
    const PasswordVisibleIcon = Icons.PasswordVisibleIcon
    const [email, setEmail] = useState("")
    return (
        <ScrollView>
            <View style={styles.mainView}>
                <AuthenticationScreenHeader
                    title='Welcome to Tamang Food Services'
                    text="Enter your Phone number or Email address for sign in. Enjoy your food :)"
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
                    <Input
                        name=""
                        value={email}
                        onChangeText={(e) => { setEmail(e) }}
                        label='PASSWORD'
                        activeUnderlineColor={Color.mds_global_gray_color}
                        underlineColor={Color.mds_global_gray_color}
                        textColor={Color.mds_global_black_color}
                        rightIcon={PasswordVisibleIcon}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(Routes.AUTHORIZATIONNAVIGATION, {
                            screen: Routes.FORGOTPASSWORD
                        })
                    }}>
                    <Text

                        style={styles.forgetText}
                    > Forget Password ?</Text>
                </TouchableOpacity>

                <Button
                    // textStyle={styles.buttonStyle}
                    onPress={() => {
                        navigation.navigate(Routes.MAIN, {
                            screen: Routes.HomeNavigation
                        })

                    }}
                    title={<Text style={styles.buttonStyle}>SIGN IN</Text>}
                ></Button>
                <View style={styles.createAccountView}>
                    <Text
                        style={styles.forgetText}
                    >Don,t Have Account ?</Text>
                    <Text
                        onPress={() => {
                            navigation.navigate(Routes.AUTHORIZATIONNAVIGATION, {
                                screen: Routes.REGISTER
                            })
                        }}
                        style={{
                            color: Color.mds_global_main_Yellow_color
                        }}
                    >Create New Account</Text>
                </View>
                <Button
                    textStyle={styles.facebookButton}
                    onPress={() => { }}
                    title={<View style={styles.facebookIconView}>
                        <View style={styles.iconStyle}><FacebookIcon /></View>
                        <Text style={styles.buttonStyle}> Connect With Facebook</Text>
                    </View>}
                ></Button>
                <Button
                    textStyle={styles.googleButton}
                    onPress={() => { }}
                    title={<View style={styles.facebookIconView}>
                        <View style={styles.iconStyle}><FacebookIcon /></View>
                        <Text style={styles.buttonStyle}> Connect With Google</Text>
                    </View>}
                ></Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        display: "flex",
        flexDirection: "column",
        gap: 15,
        padding: 10
    },
    viewStyle: {
        display: "flex",
        flexDirection: "column",
        gap: 12
    },
    forgetText: {
        ...Fonts.style.mds_ui_gothic_fonts_footnote_thin,
        textAlign: "center",


    },
    buttonStyle: {
        color: Color.mds_global_white_color,
        ...Fonts.style.mds_ui_font_medium_semi,
    },
    createAccountView: {
        display: "flex",
        gap: 5,
        flexDirection: "row",
        justifyContent: "center"
    },
    facebookButton: {
        backgroundColor: Color.mds_global_darkblue_color,
        borderRadius: 8,
        padding: 5

    },
    googleButton: {
        backgroundColor: Color.mds_global_main_Blue_color,
        borderRadius: 8,
        padding: 5
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
    }


})
export default Login