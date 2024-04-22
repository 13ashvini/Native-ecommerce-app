import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Routes } from '../../../core/navigation/type'
import * as Icons from "../../../core/svg"
import { AuthenticationScreenHeader } from '../../../core/component/ui/AuthenticationScreenHeader'
import Input from '../../../core/component/Input/Input'
import Color from '../../../core/contstants/Color'
import Fonts from '../../../core/contstants/Fonts'
import Button from '../../../core/component/Buttons/Button'
import { CommonActions } from '@react-navigation/native'
import { showMessage } from 'react-native-flash-message'
import { useLoginUserMutation } from '../../../service/authService'
import { Formik, FormikHelpers } from 'formik'
import * as yup from "yup"
import AsyncStorage from '@react-native-async-storage/async-storage'
type Props = {
    navigation: any
}
type LoginFormProps = {
    email: string
    password: string

}

const Login: React.FC<Props> = ({ navigation }) => {
    const FacebookIcon = Icons.FacebookIcon
    const PasswordVisibleIcon = Icons.PasswordVisibleIcon
    const [loginUser] = useLoginUserMutation()
    const formRef = useRef<any | null>(null)

    const FormInitialValue: LoginFormProps = {
        email: "",
        password: "",

    }
    const storeToken = async (value: string) => {
        try {
            // const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('access_token', value);
        } catch (e) {
        }
    };

    const getToken = async () => {
        const token = await AsyncStorage.getItem("access_token");
        return token;
    };
    
    
    const SubmitLoginForm = (values: LoginFormProps, { setSubmitting }: FormikHelpers<LoginFormProps>
    ) => {
        const formattedValue = values
        loginUser(formattedValue).then((res: any) => {
            console.log("res", res)
            if (res?.error) {
                setSubmitting(false)
                if (res?.error?.data?.message) {
                    setSubmitting(false)
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
                setSubmitting(false)
                // AsyncStorage.setItem("access_token", res?.data?.token)
                if (res?.data?.message) {
                    storeToken(res?.data?.token)
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
                                    name: Routes.MAIN,
                                    state: {
                                        routes: [{ name: Routes.HomeNavigation }],
                                    },
                                },
                            ],
                        }),
                    )
                    formRef.current.resetForm()

                }
            }
        }).catch(() => {

        })
    }
    const ValidationSchema = yup.object({
        email: yup.string().required("Email is required").email("Enter Valid Email"),
        password: yup.string().required("Password is required"),

    })
    useEffect(() => {
        getToken()
    })
    return (
        <ScrollView>
            <View style={styles.mainView}>
                <AuthenticationScreenHeader
                    title='Welcome to Tamang Food Services'
                    text="Enter your Phone number or Email address for sign in. Enjoy your food :)"
                />
                <Formik
                    validationSchema={ValidationSchema}
                    innerRef={formRef}
                    initialValues={FormInitialValue}
                    onSubmit={SubmitLoginForm}
                >
                    {({ handleChange, handleSubmit, values, isSubmitting }) => (

                        <View style={styles.mainView}>
                            <View style={styles.viewStyle}>
                                <Input
                                    value={values?.email}
                                    onChangeText={handleChange('email')}
                                    label='Email Address'
                                    activeUnderlineColor={Color.mds_global_gray_color}
                                    underlineColor={Color.mds_global_gray_color}
                                    textColor={Color.mds_global_black_color}
                                    name={'email'}
                                />
                                <Input
                                    value={values?.password}
                                    onChangeText={handleChange('password')}
                                    label='Password'
                                    activeUnderlineColor={Color.mds_global_gray_color}
                                    underlineColor={Color.mds_global_gray_color}
                                    textColor={Color.mds_global_black_color}
                                    rightIcon={PasswordVisibleIcon}
                                    secureTextEntry={true}
                                    name={'password'}
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
                                textStyle={{ marginTop: 5 }}
                                loader={isSubmitting}
                                loaderColor={Color.mds_global_main_Yellow_color}
                                onPress={handleSubmit}
                                title={<Text style={styles.buttonStyle}>SIGN IN</Text>}
                            ></Button>
                            <View style={styles.createAccountView}>
                                <Text
                                    style={styles.forgetText}
                                >Don,t Have Account ?</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate(Routes.AUTHORIZATIONNAVIGATION, {
                                            screen: Routes.REGISTER
                                        })
                                    }}
                                >
                                    <Text

                                        style={{
                                            color: Color.mds_global_main_Yellow_color
                                        }}
                                    >Create New Account</Text>
                                </TouchableOpacity>
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
                    )}


                </Formik>

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