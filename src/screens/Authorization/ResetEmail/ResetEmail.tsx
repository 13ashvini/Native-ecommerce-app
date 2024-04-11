import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Color from '../../../core/contstants/Color'
import Fonts from '../../../core/contstants/Fonts'
import { AuthenticationScreenHeader } from '../../../core/component/ui/AuthenticationScreenHeader'
import Button from '../../../core/component/Buttons/Button'
import { Routes } from '../../../core/navigation/type'
import FastImage from 'react-native-fast-image'
import image from "../../../core/assests/images"
const ResetEmail = ({navigation}:any) => {
  return (
    <View style={styles.mainView}>
    <AuthenticationScreenHeader
        title='Reset Email Sent'
        text="We have sent a instructions email to sajin tamang@figma.com."
        extraText='Having problem?'
    />
    
   
    <Button
        onPress={() => { navigation.navigate(Routes.MAIN,{
            screen:Routes.HOME
        })}}
        title={<Text style={styles.buttonStyle}>RESET PASSWORD</Text>}
        
    ></Button>
   
   <FastImage source={image.resetEmailPageImage}
   resizeMode={"contain"}
   style={styles.HeadingImage}
   />
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
  HeadingImage: {
    height: 237.03,
    width: 307,
    objectFit: "cover",
    alignSelf: 'center',
    marginVertical:20

  },
  buttonStyle: {
      color: Color.mds_global_white_color,
      ...Fonts.style.mds_ui_font_medium_semi,
  },})
export default ResetEmail