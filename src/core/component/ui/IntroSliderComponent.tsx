import React from 'react'
import { StyleSheet, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import images from '../../assests/images'
import { Image, Text } from 'react-native'
import Fonts, { fontSizeLabel } from '../../contstants/Fonts';
import Color from '../../contstants/Color'
import Button from '../Buttons/Button'
import { Routes } from '../../navigation/type'
import { navigationRef } from '../../navigation/RootNavigation'




type Props = {
  navigation?: any
  text: string,
  title: string,
  image: any,
  // onPress: () => void,

}

const IntroSliderComponent = ({ navigation, text, title, image }: Props) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headingSetup}>
        <FastImage source={images.sliderImage} style={styles.imgStyle} />
        <Text style={styles.heading}>Tamang
          FoodService</Text>
      </View>
      <View >
        <FastImage
          resizeMode={"contain"} source={image} style={styles.HeadingImage} />
      </View>
      <View style={{ marginBottom: 8 }}>
        <Text style={styles.welcomeStyle}>
          {title}
        </Text>
        <Text style={styles.textStyle}>
          {text}
        </Text>
      </View>
      <View style={{ marginTop: 30, marginBottom: 20 }}>
        {/* <Button
          // textStyle={styles.buttonStyle}
          onPress={onPress}
          title={<Text style={styles.buttonStyle}>Get Started</Text>}
        ></Button> */}
      </View>
    </View>
  )
}

export default IntroSliderComponent

const styles = StyleSheet.create({
  imgStyle: {
    height: 65,
    width: 65,
    alignSelf: 'center'
  },
  heading: {
    ...Fonts.style.mds_ui_font_heading2_bold,
    padding: 2,
    textAlign: "center",
    lineHeight: 47,

  },
  headingSetup: {
    flexDirection: "row",
    gap: 10,
    margin: 20,

  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    gap: 20,
    paddingVertical: 25,
  },
  HeadingImage: {
    height: 213,
    width: 243.96,
    objectFit: "cover",
    alignSelf: 'center',
  },
  welcomeStyle: {
    ...Fonts.style.mds_ui_font_heading4_bold,
    textAlign: "center"
  },
  textStyle: {
    fontSize: Fonts.fontSize.medium,
    marginHorizontal: 15,
    color: Color.mds_global_black_color,
    textAlign: "center",

  },

  buttonStyle: {
    color: Color.mds_global_white_color,
    ...Fonts.style.mds_ui_font_medium_semi,
  }

})