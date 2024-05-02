import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fonts from '../../../core/contstants/Fonts'
import Color from '../../../core/contstants/Color'
import images from '../../../core/assests/images'
import Button from '../../../core/component/Buttons/Button'
import Input from '../../../core/component/Input/Input'
import { Formik } from 'formik'
import { ScrollView } from 'native-base'
import FastImage from 'react-native-fast-image'
import ImagePicker from 'react-native-image-crop-picker';
import RadioButton from '../../../core/component/RadioButton/RadioButton'
const AddRestaurant = () => {
    const [cameraImage, setCameraImage] = useState()
    const launchCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then((image: any) => {
            setCameraImage(image.path)
            console.log(image);
        });
    }
    const launchLiberary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then((image: any) => {
            setCameraImage(image.path)

            console.log(image);
        });
    }
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];
    return (
        <ScrollView>
            <View >
                <View>
                    <ImageBackground source={images?.Restaurants7} resizeMode="cover" style={styles.image}>
                        <Text style={styles.titlestyle}>Add Restaurant</Text>
                    </ImageBackground>
                </View>
                <View style={styles.mainView}>
                    <View style={styles.mainView}>
                        <View style={styles.viewStyle}>
                            <Input
                                type={"outlined"}
                                // value={values?.email}
                                // onChangeText={handleChange('email')}
                                value={""}
                                onChangeText={() => { }}
                                label='Restaurant Name'
                                activeUnderlineColor={Color.mds_global_gray_color}
                                underlineColor={Color.mds_global_gray_color}
                                textColor={Color.mds_global_black_color}

                                name={''}
                            />
                            <Input
                                type={"outlined"}
                                // value={values?.email}
                                // onChangeText={handleChange('email')}
                                value={""}
                                onChangeText={() => { }}
                                label='Restaurant Location'
                                activeUnderlineColor={Color.mds_global_gray_color}
                                underlineColor={Color.mds_global_gray_color}
                                textColor={Color.mds_global_black_color}
                                name={''}
                            />
                            <Input
                                type={"outlined"}
                                // value={values?.email}
                                // onChangeText={handleChange('email')}
                                value={""}
                                onChangeText={() => { }}
                                label='Restaurant Delivery'
                                activeUnderlineColor={Color.mds_global_gray_color}
                                underlineColor={Color.mds_global_gray_color}
                                textColor={Color.mds_global_black_color}
                                name={''}
                            />

                            <Input
                                type={"outlined"}
                                // value={values?.email}
                                // onChangeText={handleChange('email')}
                                value={""}
                                onChangeText={() => { }}
                                label='Time'
                                activeUnderlineColor={Color.mds_global_gray_color}
                                underlineColor={Color.mds_global_gray_color}
                                textColor={Color.mds_global_black_color}
                                name={''}
                            />

                            <RadioButton
                                options={options}
                                onSelect={() => { }}
                                containerStyle={{ marginVertical: 10 }}
                                buttonStyle={{ backgroundColor: 'lightgray' }}
                            />
                            <Input
                                type={"outlined"}
                                // value={values?.email}
                                // onChangeText={handleChange('email')}
                                value={""}
                                onChangeText={() => { }}
                                label='Rating'
                                activeUnderlineColor={Color.mds_global_gray_color}
                                underlineColor={Color.mds_global_gray_color}
                                textColor={Color.mds_global_black_color}
                                name={''}
                            />
                        </View>
                        {cameraImage ?
                            <FastImage source={{
                                uri: cameraImage
                            }} resizeMode="contain" style={styles.image} /> :
                            <TouchableOpacity onPress={() => {
                                launchCamera()
                            }}>
                                <View>
                                    <FastImage source={images?.cameraImage} resizeMode="contain" style={styles.image} />


                                </View>
                            </TouchableOpacity>}

                        <TouchableOpacity
                            onPress={() => {
                                launchLiberary()
                            }}>
                            <Text>
                                Photo From Liberary
                            </Text>
                        </TouchableOpacity>
                        <Button
                            textStyle={{ marginTop: 5 }}
                            loaderColor={Color.mds_global_main_Yellow_color}
                            onPress={() => { }}
                            title={<Text style={styles.buttonStyle}>Add Restaurant</Text>}
                        ></Button>


                    </View>

                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    buttonStyle: {
        color: Color.mds_global_white_color,
        ...Fonts.style.mds_ui_font_medium_semi,
    },
    titlestyle: {
        ...Fonts.style.mds_ui_gothic_font_heading5_bold,
        color: Color.mds_global_white_color
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

        flex: 1
    },
    image: {
        width: "100%",
        height: 180,
        justifyContent: "flex-start",
        alignItems: 'flex-start'
    },

})
export default AddRestaurant