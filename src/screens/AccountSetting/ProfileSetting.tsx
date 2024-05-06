import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ErrorMessage, Formik, FormikHelpers } from 'formik'
import * as Icon from "../../core/svg"
import PhoneInput from 'react-native-phone-number-input'
import FlashMessage, { showMessage } from 'react-native-flash-message'
import Color from '../../core/contstants/Color'
import { Routes } from '../../core/navigation/type'
import * as yup from "yup"
import Fonts from '../../core/contstants/Fonts'
import Button from '../../core/component/Buttons/Button'
import Input from '../../core/component/Input/Input'
import { useGetProfileDetailQuery, useUpdateProfileSettingMutation } from '../../service/profileService'
type ProfileFormProps = {
    fullName: string
    email: string
    password: string
    mobileNumber: string
}
const ProfileSetting = ({ navigation }: any) => {
    const formRef = useRef<any | null>(null)
    const phoneInputRef = useRef<PhoneInput>(null);
    const [getProfileData, setGetProfileData] = useState<any | null>(null)
    console.log("getProfileData", getProfileData)
    const [updateProfile] = useUpdateProfileSettingMutation()
    const PasswordVisibleIcon = Icon.PasswordVisibleIcon
    const [initialMobileNumber, setInitialMobileNumber] = useState<string | undefined>("");
    const { data: profileData, isLoading: isProfileDataLoading, isFetching: isProfileDataFetching } = useGetProfileDetailQuery("")

    // Update the useEffect to set initial mobile number when profileData is available
    useEffect(() => {
        if (profileData) {
            setGetProfileData(profileData);
            const mobileNumber = getProfileData?.data?.phoneNo;
            setInitialMobileNumber(mobileNumber);
        }
    }, [getProfileData]);
    useEffect(() => {
        if (!isProfileDataLoading || !isProfileDataFetching || profileData) {
            setGetProfileData(profileData)
            console.log("profileData=-=-=-=", profileData)
            // setGetProfileData(false)
        } else {
            // setGetProfileData(true)
        }
    }, [profileData])
    const FormInitialValue: ProfileFormProps = {
        fullName: getProfileData?.data?.name || "",
        email: getProfileData?.data?.email || "",
        password: getProfileData?.data?.password || "",
        mobileNumber: initialMobileNumber?.trim() || "7777"
    };
    console.log("getProfileData?.data?.phoneNo", getProfileData?.data?.phoneNo)
    console.log("initialMobileNumber", initialMobileNumber)
    const SubmitLoginForm = (values: ProfileFormProps, { setSubmitting }: FormikHelpers<ProfileFormProps>
    ) => {
        const formattedValue = values
        updateProfile(formattedValue).then((res: any) => {
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
        fullName: yup.string().required("Full Name is required"),
        email: yup.string().required("Email is required").email("Enter Valid Email"),
        password: yup.string().required("Password is required"),
        mobileNumber: yup.string().required("Mobile Number is required")
    })
    return (
        <View style={{ flex: 1, }}>

            {/* <FlashMessage position={"top"} /> */}
            < View style={styles.mainView} >

                <Formik
                    validationSchema={ValidationSchema}
                    innerRef={formRef}
                    initialValues={FormInitialValue}
                    onSubmit={SubmitLoginForm}
                    enableReinitialize={true}
                >
                    {({ handleChange, resetForm, handleSubmit, values, isSubmitting }) => (

                        <View style={{ flex: 1, justifyContent: "center" }}>
                            <View style={styles.viewStyle}>
                                <Input
                                    value={values?.fullName}
                                    onChangeText={handleChange('fullName')}
                                    label='Full Name'
                                    name={'fullName'}
                                    activeUnderlineColor={Color.mds_global_gray_color}
                                    underlineColor={Color.mds_global_gray_color}
                                    textColor={Color.mds_global_black_color}
                                />
                                <Input
                                    value={values?.email}
                                    onChangeText={handleChange('email')}
                                    label='Email Address'
                                    activeUnderlineColor={Color.mds_global_gray_color}
                                    underlineColor={Color.mds_global_gray_color}
                                    textColor={Color.mds_global_black_color}
                                    name={'email'}
                                />
                                <PhoneInput
                                    ref={phoneInputRef}
                                    containerStyle={{ borderBottomWidth: 1, borderColor: "#E5E5E5", width: '100%' }}
                                    countryPickerButtonStyle={{ backgroundColor: "white", }}
                                    textInputStyle={{ backgroundColor: "white" }}
                                    codeTextStyle={{ backgroundColor: "white" }}
                                    textContainerStyle={{ backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center" }}
                                    // defaultValue={getProfileData?.data?.phoneNo || ""}
                                    defaultCode="IN"
                                    layout='first'
                                    value={values?.mobileNumber}
                                    onChangeText={handleChange('mobileNumber')}

                                />
                                <ErrorMessage name={'mobileNumber'}>
                                    {(errMsg: string) => (
                                        <Text style={styles.errorMessage}>
                                            {errMsg}
                                        </Text>
                                    )}
                                </ErrorMessage>
                                {/* <Input
                                    value={values?.password}
                                    onChangeText={handleChange('password')}
                                    label='Password'
                                    activeUnderlineColor={Color.mds_global_gray_color}
                                    underlineColor={Color.mds_global_gray_color}
                                    textColor={Color.mds_global_black_color}
                                    rightIcon={PasswordVisibleIcon}
                                    secureTextEntry={true}
                                    name={'password'}
                                /> */}



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
                                    title={<Text style={styles.buttonStyle}> CHANGE PROFILE</Text>}
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
        gap: 15,
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
export default ProfileSetting