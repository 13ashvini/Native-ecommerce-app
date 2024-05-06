import React, { useRef } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Color from '../../../core/contstants/Color'
import Fonts from '../../../core/contstants/Fonts'
import { AuthenticationScreenHeader } from '../../../core/component/ui/AuthenticationScreenHeader'
import Input from '../../../core/component/Input/Input'
import Button from '../../../core/component/Buttons/Button'
import * as Icon from "../../../core/svg"
import { Routes } from '../../../core/navigation/type'
import PhoneInput from "react-native-phone-number-input";
import { ErrorMessage, Formik, FormikHelpers } from 'formik'
import * as yup from "yup"
import FlashMessage, { showMessage } from 'react-native-flash-message'
import { useRegisterUserMutation } from '../../../service/authService'
import { CommonActions } from '@react-navigation/native'

type LoginFormProps = {
  name: string
  email: string
  password: string
  phoneNo: string
}
const Register = ({ navigation }: any) => {
  const formRef = useRef<any | null>(null)
  const phoneInputRef = useRef<PhoneInput>(null);
  const FacebookIcon = Icon.FacebookIcon
  const GoogleIcon = Icon.FacebookIcon
  const PasswordVisibleIcon = Icon.PasswordVisibleIcon
  const [registerUser] = useRegisterUserMutation()

  const FormInitialValue: LoginFormProps = {
    name: "",
    email: "",
    password: "",
    phoneNo: ""
  }
  const SubmitLoginForm = (values: LoginFormProps, { setSubmitting }: FormikHelpers<LoginFormProps>
  ) => {
    const formattedValue = values
    registerUser(formattedValue).then((res: any) => {
      console.log("respopup", res)
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
        if (res?.data?.message) {
          showMessage({
            message: (res?.data?.message),
            type: "success",
            backgroundColor: Color.mds_global_main_Yellow_color,
            color: Color.mds_global_white_color,
          });
          formRef.current.resetForm()
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: Routes.AUTHORIZATIONNAVIGATION,
                  state: {
                    routes: [{ name: Routes.VERIFYNUMBER }],
                  },
                },
              ],
            }),
          )
          // navigation.navigate(Routes.AUTHORIZATIONNAVIGATION, {
          //   screen: Routes.VERIFYNUMBER
          // })
        }
      }
    }).catch(() => {

    })
  }
  const ValidationSchema = yup.object({
    name: yup.string().required("Full Name is required"),
    email: yup.string().required("Email is required").email("Enter Valid Email"),
    password: yup.string().required("Password is required"),
    phoneNo: yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10)
      // .max(10)
      .required('A phone number is required'),
  })
  return (
    <ScrollView>
      <FlashMessage position={"top"} />
      <View style={styles.mainView}>
        <AuthenticationScreenHeader
          title='Create Account'
          text="Enter your Name, Email and Password for sign up."
          extraText='Already have account?'
        />
        <Formik
          validationSchema={ValidationSchema}
          innerRef={formRef}
          initialValues={FormInitialValue}
          onSubmit={SubmitLoginForm}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (

            <View>
              <View style={styles.viewStyle}>
                <Input
                  value={values?.name}
                  onChangeText={handleChange('name')}
                  label='Full Name'
                  name={'name'}
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


                <PhoneInput
                  ref={phoneInputRef}
                  containerStyle={{ borderBottomWidth: 1, borderColor: "#E5E5E5", width: '100%' }}
                  countryPickerButtonStyle={{ backgroundColor: "white", }}
                  textInputStyle={{ backgroundColor: "white" }}
                  codeTextStyle={{ backgroundColor: "white" }}
                  textContainerStyle={{ backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center" }}
                  // defaultValue={""}
                  defaultCode="IN"
                  layout='first'
                  value={values?.phoneNo}
                  onChangeText={handleChange('phoneNo')}

                />
                <ErrorMessage name={'phoneNo'}>
                  {(errMsg: string) => (
                    <Text style={styles.errorMessage}>
                      {errMsg}
                    </Text>
                  )}
                </ErrorMessage>
              </View>

              <Button
                textStyle={{ marginTop: 5 }}
                loader={isSubmitting}
                loaderColor={Color.mds_global_main_Yellow_color}
                onPress={handleSubmit}
                title={<Text style={styles.buttonStyle}>SIGN UP</Text>}
              ></Button>
            </View>
          )}


        </Formik>

        <Text

          style={styles?.policyText}
        >By Signing up you agree to our Terms Conditions & Privacy Policy.</Text>

        <Text style={{ textAlign: "center" }}>
          Or
        </Text>
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
            <View style={styles.iconStyle}><GoogleIcon /></View>
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
    paddingVertical: 1,
    paddingHorizontal: 15
  },
  viewStyle: {
    display: "flex",
    flexDirection: "column",
    gap: 5
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
    padding: 10

  },
  googleButton: {
    backgroundColor: Color.mds_global_main_Blue_color,
    borderRadius: 8,
    padding: 10
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
export default Register