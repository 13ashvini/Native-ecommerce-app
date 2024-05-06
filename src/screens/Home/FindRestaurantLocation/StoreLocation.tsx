import { View, Text, StyleSheet, Alert, PermissionsAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from '../../../core/contstants/Color'
import Fonts from '../../../core/contstants/Fonts'
import Button from '../../../core/component/Buttons/Button'
import * as Icons from "../../../core/svg"
import Geolocation from '@react-native-community/geolocation'; // Import Geolocation
import Input from '../../../core/component/Input/Input'
import { useAddLocationMutation } from '../../../service/locationService'
import { showMessage } from 'react-native-flash-message'
import { CommonActions } from '@react-navigation/native'
import { Routes } from '../../../core/navigation/type'



const StoreLocation = ({ navigation }: any) => {
    const [currentAddress, setCurrentAddress] = useState(null);
    const locationIcon = Icons.LocationTabIcon
    const [addLocation] = useAddLocationMutation()
    const [addLocationLoader, setAddLocationLoader] = useState(false)
    const [loading, setLoading] = useState(false); // State for loading indicator

    console.log("currentAddress", currentAddress)

    useEffect(() => {
        requestLocationPermission(); // Request location permission when the component mounts
    }, []);

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Location Permission",
                    message: "This app needs access to your location to find nearby restaurants.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Location permission granted");
            } else {
                console.log("Location permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const getCurrentLocation = () => {
        setLoading(true);
        Geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                console.log('Latitude: ', latitude);
                console.log('Longitude: ', longitude);
                const address = await getCurrentAddress(latitude, longitude);
                setCurrentAddress(address);
                setLoading(false);
            },
            (error) => Alert.alert('Error', 'Failed to get location. Please check your GPS settings.'),
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
        );
    };
    const getCurrentAddress = async (latitude: any, longitude: any) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            console.log("data=-=-------", data)
            if (data.display_name) {
                return data.display_name;
            } else {
                return 'Address not found';
            }
        } catch (error) {
            console.error('Error fetching address: ', error);
            return 'Error fetching address';
        }
    };

    const addLocationHandle = (
    ) => {
        setAddLocationLoader(true)
        addLocation({
            location: currentAddress
        }).then((res: any) => {
            if (res?.error) {
                setAddLocationLoader(false)

                if (res?.error?.data?.message) {
                    setAddLocationLoader(false)
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
                setAddLocationLoader(false)
                if (res?.data?.message) {

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

                }
            }
        }).catch(() => {
            setAddLocationLoader(false)

        })
    }
    return (
        <View style={styles.mainView}>
            <View style={styles?.headingView}>
                <Text style={styles.titlestyle}>Find restaurants near you </Text>
                <Text style={styles.textStyle}>Please enter your location or allow access to your location to find restaurants near you.</Text>
            </View>

            {loading ? <ActivityIndicator
                size="large"
                color={Color.mds_global_main_Yellow_color}
            /> :

                <Button
                    textStyle={styles.buttonStyle}
                    onPress={() => {
                        getCurrentLocation()
                    }}
                    title={<View
                        style={{ flexDirection: "row", gap: 2, }}
                    >
                        <Icons.SendIcon />
                        <Text style={styles.buttonTextStyle}>Use current location</Text>
                    </View>}
                ></Button>}

            <View style={{ paddingHorizontal: 20 }}>
                <Input
                    type={"outlined"}
                    value={currentAddress}
                    onChangeText={(e: any) => {
                        setCurrentAddress(e)
                    }}
                    placeholder='Enter A new Address'
                    activeOutlineColor={Color.mds_global_gray_color}
                    // OutlineColor={Color.mds_global_gray_color}
                    textColor={Color.mds_global_black_color}
                    name={''}
                    leftIcon={locationIcon}
                />
            </View>
            <Button
                textStyle={{ marginTop: 5 }}
                loader={addLocationLoader}
                loaderColor={Color.mds_global_main_Yellow_color}
                onPress={addLocationHandle}
                title={<Text style={{ color: Color.mds_global_white_color }}>Save</Text>}
            ></Button>
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
        paddingVertical: 10,
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
        color: Color.mds_global_main_Yellow_color,
        backgroundColor: Color.mds_global_white_color,
        ...Fonts.style.mds_ui_font_medium_semi,
        borderWidth: 1,
        borderColor: Color.mds_global_main_Yellow_color,
        margin: 0,

    },
    buttonTextStyle: {
        color: Color.mds_global_main_Yellow_color,
        backgroundColor: Color.mds_global_white_color,
        ...Fonts.style.mds_ui_font_medium_semi,

    },
    policyText: {
        textAlign: "center",
        paddingHorizontal: 15,
        ...Fonts.style.mds_ui_gothic_fonts_footnote_thin
    },
})
export default StoreLocation