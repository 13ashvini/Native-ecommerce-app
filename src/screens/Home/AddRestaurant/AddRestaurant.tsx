import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fonts from '../../../core/contstants/Fonts'
import Color from '../../../core/contstants/Color'
import images from '../../../core/assests/images'
import Button from '../../../core/component/Buttons/Button'
import Input from '../../../core/component/Input/Input'
import { Formik, FormikProps } from 'formik'
import { ScrollView } from 'native-base'
import FastImage from 'react-native-fast-image'
import ImagePicker from 'react-native-image-crop-picker';
import RadioButton from '../../../core/component/RadioButton/RadioButton'
import Select from '../../../core/component/Select/Select'
import ImageContainer from '../../../core/component/ImageContainer'
import * as Icon from "../../../core/svg"
import { AddRestaurantProps } from './AddRestaurantWrapper'
import { useAddRestaurantMutation } from '../../../service/RestaurantService'
type Props = {
    addRestaurantProps: FormikProps<AddRestaurantProps>;
};
const AddRestaurant = ({ addRestaurantProps }: Props) => {
    const { values, setFieldValue, isSubmitting, handleSubmit } = addRestaurantProps;

    const [selectedOption, setSelectedOption] = useState<string | number>('');
    const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false)
    // Options for the select
    const Selectoptions = [
        { label: 'Express', value: 'express' },
        { label: 'Free', value: 'free' },

    ];

    // Function to handle selection
    const handleSelect = (value: string | number) => {
        setSelectedOption(value);
    };

    const launchCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then((image: any) => {

            setFieldValue("images", [...values?.images, image.path]);

            setIsOpenLogoutModal(false);
        });
    }
    const launchLiberary = () => {
        ImagePicker.openPicker({
            multiple: true,
            cropping: true,
        }).then((image: any[]) => {
            const paths = image.map((img) => img.path);
            setFieldValue("images", [...values?.images, ...paths]);
            setIsOpenLogoutModal(false);
        });
    };
    const removeImage = (index: number) => {
        const updatedImages = [...values?.images];
        updatedImages.splice(index, 1);
        setFieldValue("images", updatedImages);
    };
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];
    const renderLogoutConfirmModal = () => (
        <ImageContainer
            takeLibraryTitle={"Take From Liberary"}
            onPressTakePhoto={launchCamera}
            onPressLibrary={launchLiberary}
            takePhotoTitle={"Take Photo"}
            visible={isOpenLogoutModal}
            onRequestClose={() => {
                setIsOpenLogoutModal(false)
            }}
        />
    )
    const renderImages = () => {
        return values?.images?.map((image, index) => (
            <View key={index} style={styles.imageContainer}>
                <FastImage source={{ uri: image }} resizeMode="contain" style={styles.image} />
                <TouchableOpacity onPress={() => removeImage(index)} style={styles.removeButton}>
                    <Text style={styles.removeButtonText}><Icon.CancelIcon size={20} /></Text>
                </TouchableOpacity>
            </View>
        ));
    };
    return (
        <ScrollView>
            <View >
                <View>
                    <ImageBackground source={images.Restaurants7} resizeMode="cover" style={styles.restaurantImage}>
                        <Text style={styles.titlestyle}>Add Restaurant</Text>
                    </ImageBackground>
                </View>
                <View style={styles.mainView}>
                    <View style={styles.mainView}>
                        <View style={styles.viewStyle}>
                            <Input
                                type={"outlined"}
                                value={values?.restaurantPartnerName}
                                onChangeText={(e) => {
                                    setFieldValue("restaurantPartnerName", e)
                                }}

                                placeholder='Enter  Name'
                                activeUnderlineColor={Color.mds_global_gray_color}
                                underlineColor={Color.mds_global_gray_color}
                                textColor={Color.mds_global_black_color}
                                inputlabel={"Restaurant Name"}
                                name={'restaurantPartnerName'}
                            />
                            <Input
                                type={"outlined"}
                                value={values?.location}
                                onChangeText={(e) => {
                                    setFieldValue("location", e)
                                }}
                                placeholder='Enter  Location'
                                inputlabel={"Restaurant Location"}
                                activeUnderlineColor={Color.mds_global_gray_color}
                                underlineColor={Color.mds_global_gray_color}
                                textColor={Color.mds_global_black_color}
                                name={'location'}
                            />
                            <Select
                                options={Selectoptions}
                                onSelect={(e) => {
                                    setFieldValue("deliveryType", e)
                                }}
                                selectedValue={values?.deliveryType}
                                label='Select Delivery Type'
                                placeholder='Select Delivery'
                            />

                            <Input
                                type={"outlined"}
                                value={values?.time}
                                onChangeText={(e) => {
                                    setFieldValue("time", e)
                                }}
                                placeholder='Enter Time'
                                inputlabel={"Time (In Min)"}
                                activeUnderlineColor={Color.mds_global_gray_color}
                                underlineColor={Color.mds_global_gray_color}
                                textColor={Color.mds_global_black_color}
                                name={'time'}
                            />

                            <RadioButton
                                label="Food Available"
                                options={options}
                                onSelect={(e) => {
                                    setFieldValue("available", e)
                                }} containerStyle={{ marginVertical: 10 }}
                                buttonStyle={{ backgroundColor: 'lightgray' }}
                            />
                            <Input
                                type={"outlined"}
                                value={values?.rating}
                                onChangeText={(e) => {
                                    setFieldValue("rating", e)
                                }}
                                placeholder='Rating'
                                inputlabel={"Rating"}
                                activeUnderlineColor={Color.mds_global_gray_color}
                                underlineColor={Color.mds_global_gray_color}
                                textColor={Color.mds_global_black_color}
                                name={'rating'}
                            />
                        </View>
                        {/* {images ?
                            <FastImage source={{
                                uri: images
                            }} resizeMode="contain" style={styles.image} /> :
                            <TouchableOpacity onPress={() => {
                                setIsOpenLogoutModal(true)
                            }}>
                                <View>
                                    <FastImage source={images?.} resizeMode="contain" style={styles.image} />


                                </View>
                            </TouchableOpacity>} */}
                        <View style={styles.imagesContainer}>
                            {renderImages()}
                            <TouchableOpacity onPress={() => setIsOpenLogoutModal(true)}>
                                <FastImage source={images?.cameraImage} resizeMode="contain" style={styles.image} />
                            </TouchableOpacity>
                        </View>
                        {/* <TouchableOpacity
                            onPress={() => {
                                launchLiberary()
                            }}>
                            <Text>
                                Photo From Liberary
                            </Text>
                        </TouchableOpacity> */}
                        <Button
                            loader={isSubmitting}
                            textStyle={{ marginTop: 5 }}
                            loaderColor={Color.mds_global_main_Yellow_color}
                            onPress={handleSubmit}
                            title={<Text style={styles.buttonStyle}>Add Restaurant</Text>}
                        ></Button>



                    </View>
                    {renderLogoutConfirmModal()}
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    selectContainer: {
        width: '80%',
        marginBottom: 20,
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 100,
        height: 100,
    },
    restaurantImage: {
        width: "100%",
        height: 200,
        justifyContent: "center"
    },
    removeButton: {
        position: 'absolute',
        top: 1,
        right: 2,
        backgroundColor: Color.mds_global_main_Yellow_color,
        borderRadius: 30,
    },
    removeButtonText: {
        color: 'white',
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
        color: Color.mds_global_white_color,
        textAlign: "center",

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
    cameraimage: {
        width: "100%",
        height: 180,
        justifyContent: "center",
        alignItems: 'center'
    },

})
export default AddRestaurant