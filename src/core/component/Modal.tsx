import React from 'react'
import {
    Modal as RNModal,
    StyleSheet, Text, View,

} from 'react-native';
import Button from './Buttons/Button';
import Color from '../contstants/Color';
import Fonts from '../contstants/Fonts';
type Props = {
    visible: boolean,
    onClickCancel: () => void,
    modalTitle: string,
    modalMessage: string,
    modalButtonTitle: string,
    modalCancelButtonTitle: string
    modalButtonAction: () => void,
    onRequestClose: () => void
}
const Modal = ({
    visible,
    onClickCancel,
    modalTitle,
    modalMessage,
    modalButtonTitle,
    modalCancelButtonTitle,
    modalButtonAction,
    onRequestClose
}: Props) => {
    return (
        <View style={styles.centeredView} >
            <RNModal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={onRequestClose}
            >
                <View style={styles.centeredView}>
                    <View style={styles.mainView}>
                        <Text style={styles?.titleStyle}>
                            {modalTitle}
                        </Text>
                        <Text style={styles.textStyle}>
                            {modalMessage}

                        </Text>
                        <View style={styles.buttonView}>
                            <Button
                                textStyle={styles.cancelButton}
                                onPress={onClickCancel}
                                title={<Text
                                    style={{ color: Color.mds_global_white_color }}>
                                    {modalCancelButtonTitle}
                                </Text>}
                            >

                            </Button>
                            <Button
                                textStyle={{
                                    paddingVertical: 9
                                }}
                                onPress={() => { }}
                                title={<Text style={styles.confirmButton}
                                    onPress={modalButtonAction}
                                >{modalButtonTitle}</Text>}
                            >

                            </Button>
                        </View>
                    </View>
                </View>
            </RNModal>
        </View >
    )
}
const styles = StyleSheet.create({
    cancelButton: {
        backgroundColor: Color.mds_global_gray_color,
        color: Color.mds_global_black_color,
        borderRadius: 10,
        paddingVertical: 10


    },
    confirmButton: {
        color: Color.mds_global_white_color,
        borderRadius: 10,
        // paddingVertical: 6
    },
    mainView: {
        display: "flex",
        gap: 10,
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 8,
        paddingVertical: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    buttonView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    textStyle: {
        ...Fonts.style.mds_ui_gothic_font_medium_bold,
        color: Color.mds_global_gray_color,

    },
    titleStyle: {
        ...Fonts.style.mds_ui_gothic_font_heading6_bold,
        color: Color.mds_global_black_color,

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        // marginTop: 22,
    },
})
export default Modal