import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fonts from '../../core/contstants/Fonts'
import * as Icon from "../../core/svg"
import Color from '../../core/contstants/Color'
import { Routes } from '../../core/navigation/type'

const AccountSetting = ({ navigation }: any) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [enableSms, setEnableSms] = useState(false)
    const [enablePromotionalNotification, setEnablePromotionalNotification] = useState(false)

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <ScrollView>
            <View style={{ flex: 1, padding: 10, gap: 10 }}>
                <View style={{ gap: 5, alignItems: "center" }}>
                    <Text style={styles.AccountSettingText}>Account Setting</Text>
                    <Text style={styles.descriptionText}>
                        Update your settings like notifications, payments, profile edit etc.
                    </Text>
                </View>
                <View style={{ marginTop: 8, display: "flex", gap: 15 }}>
                    <View style={styles.BackIconView}>
                        <View style={styles.iconStyle}>
                            <Icon.ProfileTabIcon size={30} />
                            <View>
                                <Text style={styles.titleTextStyle}>Profile Information</Text>
                                <Text>Change your account information</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate(Routes.ChangeProfileSetting)
                            }}>
                                <Icon.BackIcon />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.BackIconView}>
                        <View style={styles.iconStyle}>
                            <Icon.LockIcon size={30} />
                            <View>
                                <Text style={styles.titleTextStyle}>Change Password</Text>
                                <Text>Change your password</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate(Routes.ChangePasswordSetting)
                            }}>
                                <Icon.BackIcon />
                            </TouchableOpacity>
                        </View>


                    </View>
                    <View style={styles.BackIconView}>
                        <View style={styles.iconStyle}>
                            <Icon.PaymentIcon size={30} />
                            <View>
                                <Text style={styles.titleTextStyle}>Payment Methods</Text>
                                <Text>Add your credit & debit cards</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate(Routes.AddPaymentMethods)
                            }}>
                                <Icon.BackIcon />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.BackIconView}>
                        <View style={styles.iconStyle}>
                            <Icon.LocationTabIcon size={30} />
                            <View>
                                <Text style={styles.titleTextStyle}>Locations</Text>
                                <Text>Add or remove your delivery locations</Text>
                            </View>
                        </View>
                        <View>
                            <Icon.BackIcon />
                        </View>


                    </View>
                    <View style={styles.BackIconView}>
                        <View style={styles.iconStyle}>

                            <Icon.FacebookIcon size={22} color={Color.mds_global_gray_color} />
                            <View>
                                <Text style={styles.titleTextStyle}>Add Social Account</Text>
                                <Text>Add Facebook, Twitter etc </Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate(Routes.AddSocialAccount)
                            }}>
                                <Icon.BackIcon />
                            </TouchableOpacity>
                        </View>


                    </View>
                    <View style={styles.singlebackIcon}>
                        <View style={styles.iconStyle}>
                            <Icon.ShareIcon size={30} />
                            <View>
                                <Text style={styles.titleTextStyle}>Refer to Friends</Text>
                                <Text>Get $10 for reffering friends</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate(Routes.ReferToFriend)
                            }}>
                                <Icon.BackIcon />
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
                <View style={{ display: "flex", gap: 8, marginTop: 10, paddingVertical: 3 }}>
                    <View>
                        <Text style={styles.notificatioTextStyle}>
                            NOTIFICATION
                        </Text>
                    </View>
                    <View style={{ marginTop: 8, display: "flex", gap: 15 }}>
                        <View style={styles.BackIconView}>
                            <View style={styles.iconStyle}>
                                <Icon.NotificationIcon size={30} />
                                <View>
                                    <Text style={styles.titleTextStyle}>Push Notifications</Text>
                                    <Text>For daily update you will get it</Text>
                                </View>
                            </View>
                            <View>
                                <Switch
                                    trackColor={{ false: Color.mds_global_gray_color, true: Color.mds_global_main_Yellow_color }}
                                    thumbColor={Color.mds_global_white_color}
                                    ios_backgroundColor={Color.mds_global_gray_color}
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                        <View style={styles.BackIconView}>
                            <View style={styles.iconStyle}>
                                <Icon.NotificationIcon size={30} />
                                <View>
                                    <Text style={styles.titleTextStyle}>SMS Notifications</Text>
                                    <Text>For daily update you will get it</Text>
                                </View>
                            </View>
                            <View>
                                <Switch
                                    trackColor={{ false: Color.mds_global_gray_color, true: Color.mds_global_main_Yellow_color }}
                                    thumbColor={Color.mds_global_white_color}
                                    ios_backgroundColor={Color.mds_global_gray_color}
                                    onValueChange={() => {
                                        setEnableSms(previousState => !previousState)
                                    }}
                                    value={enableSms}
                                />
                            </View>


                        </View>
                        <View style={styles.BackIconView}>
                            <View style={styles.iconStyle}>
                                <Icon.NotificationIcon size={30} />
                                <View>
                                    <Text style={styles.titleTextStyle}>Promotional Notifications</Text>
                                    <Text>For daily update you will get it</Text>
                                </View>
                            </View>
                            <View>
                                <Switch
                                    trackColor={{ false: Color.mds_global_gray_color, true: Color.mds_global_main_Yellow_color }}
                                    thumbColor={Color.mds_global_white_color}
                                    ios_backgroundColor={Color.mds_global_gray_color}
                                    onValueChange={() => {
                                        setEnablePromotionalNotification(previousState => !previousState)
                                    }}
                                    value={enablePromotionalNotification}
                                />
                            </View>
                        </View>


                    </View>
                </View>
                <View style={{ display: "flex", gap: 8, marginTop: 10, paddingVertical: 3 }}>
                    <View>
                        <Text style={styles.notificatioTextStyle}>
                            More
                        </Text>
                    </View>
                    <View style={{ marginTop: 8, display: "flex", gap: 15 }}>
                        <View style={styles.BackIconView}>
                            <View style={styles.iconStyle}>
                                <Icon.StarIcon size={22} />
                                <View>
                                    <Text style={styles.titleTextStyle}>Rate Us</Text>
                                    <Text>Rate us playstore, appstore</Text>
                                </View>
                            </View>
                            <View>
                                <Icon.BackIcon />
                            </View>
                        </View>

                        <View style={styles.BackIconView}>
                            <View style={styles.iconStyle}>
                                <Icon.NoteBook size={24} />
                                <View>
                                    <Text style={styles.titleTextStyle}>FAQ</Text>
                                    <Text>Frequently asked questions</Text>
                                </View>
                            </View>
                            <View>
                                <Icon.BackIcon />
                            </View>


                        </View>
                        <View style={styles.BackIconView}>
                            <View style={styles.iconStyle}>
                                <Icon.LogoutIcon size={30} />
                                <View>
                                    <Text style={styles.titleTextStyle}>Logout</Text>
                                </View>
                            </View>
                            <View>
                                <Icon.BackIcon />
                            </View>
                        </View>


                    </View>
                </View>
            </View >
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    AccountSettingText: {
        ...Fonts.style.mds_ui_gothic_font_heading4_bold
    },
    descriptionText: {
        fontSize: Fonts.fontSize.body
    },
    iconStyle: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    titleTextStyle: {
        ...Fonts.style.mds_ui_gothic_font_medium_bold,
        color: Color.mds_global_black_color
    },
    BackIconView: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.4,
        paddingVertical: 10,
        borderBottomColor: Color.mds_global_gray_10_color
    },
    singlebackIcon: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,

    },
    notificatioTextStyle: {
        ...Fonts.style.mds_ui_gothic_font_body_bold,
        color: Color.mds_global_black_color,


    }
})
export default AccountSetting