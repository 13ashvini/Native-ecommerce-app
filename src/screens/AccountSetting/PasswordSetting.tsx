import { View, Text, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { Formik, FormikHelpers } from 'formik'
import * as Icon from "../../core/svg"
import PhoneInput from 'react-native-phone-number-input'
import { showMessage } from 'react-native-flash-message'
import Color from '../../core/contstants/Color'
import { Routes } from '../../core/navigation/type'
import * as yup from "yup"
import Fonts from '../../core/contstants/Fonts'
import Button from '../../core/component/Buttons/Button'
import Input from '../../core/component/Input/Input'
import { useUpdatePasswordSettingMutation } from '../../service/profileService'
type ProfileFormProps = {
    currentPassword: string,
    confirmPassword: string
    newPassword: string

}
const PasswordSetting = ({ navigation }: any) => {
    const formRef = useRef<any | null>(null)
    const PasswordVisibleIcon = Icon.PasswordVisibleIcon
    const [updatePassword] = useUpdatePasswordSettingMutation()
    const FormInitialValue: ProfileFormProps = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    }
    const SubmitLoginForm = (values: ProfileFormProps, { setSubmitting }: FormikHelpers<ProfileFormProps>
    ) => {
        const formattedValue = values
        updatePassword(formattedValue).then((res: any) => {
            console.log("res--", res)
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
                    showMessage({
                        message: (res?.data?.message),
                        type: "success",
                        backgroundColor: Color.mds_global_main_Yellow_color,
                        color: Color.mds_global_white_color,
                    });
                    navigation.navigate(Routes.AccountSettings)

                }
            }
        }).catch(() => {

        })
    }
    const ValidationSchema = yup.object({
        confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref('newPassword')], 'Passwords must match'),
        password: yup.string().required("Password is required"),
        newPassword: yup.string().required("New Password is required")
    })
    return (
        <View style={{ flex: 1, }}>
            < View style={styles.mainView} >

                <Formik
                    validationSchema={ValidationSchema}
                    innerRef={formRef}
                    initialValues={FormInitialValue}
                    onSubmit={SubmitLoginForm}
                >
                    {({ handleChange, handleSubmit, values, isSubmitting }) => (

                        <View style={{ flex: 1, justifyContent: "center" }}>
                            <View style={styles.viewStyle}>
                                <Input
                                    value={values?.currentPassword}
                                    onChangeText={handleChange('password')}
                                    label='Password'
                                    activeUnderlineColor={Color.mds_global_gray_color}
                                    underlineColor={Color.mds_global_gray_color}
                                    textColor={Color.mds_global_black_color}
                                    rightIcon={PasswordVisibleIcon}
                                    secureTextEntry={true}
                                    name={'password'}
                                />

                                <Input
                                    value={values?.newPassword}
                                    onChangeText={handleChange('newPassword')}
                                    label='New Password'
                                    activeUnderlineColor={Color.mds_global_gray_color}
                                    underlineColor={Color.mds_global_gray_color}
                                    textColor={Color.mds_global_black_color}
                                    rightIcon={PasswordVisibleIcon}
                                    secureTextEntry={true}
                                    name={'newPassword'}
                                />
                                <Input
                                    value={values?.confirmPassword}
                                    onChangeText={handleChange('confirmPassword')}
                                    label='Confirm Password'
                                    activeUnderlineColor={Color.mds_global_gray_color}
                                    underlineColor={Color.mds_global_gray_color}
                                    textColor={Color.mds_global_black_color}
                                    rightIcon={PasswordVisibleIcon}
                                    secureTextEntry={true}
                                    name={'confirmPassword'}
                                />

                            </View>

                            <View style={{
                                display: "flex"
                                // alignItems: "flex-end",
                            }}>
                                <Button
                                    textStyle={{ marginTop: 5 }}
                                    loader={isSubmitting}
                                    loaderColor={Color.mds_global_main_Yellow_color}
                                    onPress={() => {

                                        handleSubmit()
                                    }}
                                    title={<Text style={styles.buttonStyle}> CHANGE PASSWORD</Text>}
                                ></Button>
                            </View>
                        </View>
                    )}
                </Formik>
            </View >
        </View >
    )
}
const styles = StyleSheet.create({
    mainView: {
        marginVertical: 15,
        gap: 20,
        paddingVertical: 1,
        paddingHorizontal: 15,
        flex: 1,

    },
    viewStyle: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        flex: 2

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
    ,
    errorMessage: {
        ...Fonts.style.mds_ui_font_footnote_medium,
        color: "red",

    },

})
export default PasswordSetting