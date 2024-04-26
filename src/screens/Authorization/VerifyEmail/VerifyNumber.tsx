import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Color from '../../../core/contstants/Color'
import Fonts from '../../../core/contstants/Fonts'
import OTPTextInput from "react-native-otp-textinput"
import Button from '../../../core/component/Buttons/Button'
import { Routes } from '../../../core/navigation/type'
const VerifyNumber = ({ navigation }: any) => {
  const [verifyNumber, setVerifyNumber] = useState<any>("")

  return (
    <View style={styles.mainView}>
      <View style={styles?.headingView}>
        <Text style={styles.titlestyle}>Verify Phone Number</Text>
        <Text style={styles.textStyle}>Enter the 4-Digit code sent to you at +610489632578</Text>
      </View>
      <View style={{ marginTop: 20, marginBottom: 10 }}>
        <OTPTextInput
          defaultValue=''
          handleTextChange={(text) => { setVerifyNumber(text) }}
          autoFocus
          tintColor={Color.mds_global_main_Yellow_color}
        />

      </View>
      <Button
        // textStyle={styles.buttonStyle}
        onPress={() => {
          navigation.navigate(Routes.MAIN, {
            screen: Routes.StoreLocation
          });
          console.log("assssss------------")
        }}
        title={<Text style={styles.buttonStyle}>VERIFY</Text>}
      ></Button>
      <View style={styles.createAccountView}>
        <Text
        // style={styles.forgetText}
        >Didn,t Receive Code ?</Text>
        <Text
          //  onPress={() => { navigation.navigate(Routes.AUTHORIZATIONNAVIGATION,{
          //     screen:Routes.REGISTER
          // })}}
          style={{
            color: Color.mds_global_main_Yellow_color
          }}
        >Resend Again</Text>
      </View>
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
    color: Color.mds_global_white_color,
    ...Fonts.style.mds_ui_font_medium_semi,
  },
  policyText: {
    textAlign: "center",
    paddingHorizontal: 15,
    ...Fonts.style.mds_ui_gothic_fonts_footnote_thin
  },
})
export default VerifyNumber