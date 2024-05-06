import React from 'react'
import {
    Alert, Modal as RNModal,
    StyleSheet, Text, Pressable, View,
    TouchableOpacity
} from 'react-native'
import Color from '../contstants/Color'
import Fonts from '../contstants/Fonts'

type Props = {
    visible: boolean,
    onPressTakePhoto: () => void,
    takePhotoTitle: string,
    takeLibraryTitle: string
    onPressLibrary: () => void,
    onRequestClose: () => void
}
const ImageContainer = ({
    visible,
    onPressTakePhoto,
    takePhotoTitle,
    takeLibraryTitle,
    onPressLibrary,
    onRequestClose
}: Props) => {


    return (
        <View style={styles.centeredView}>
            <RNModal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            onPress={onPressTakePhoto}
                            style={styles.modalButton}
                        >
                            <View style={styles.row}>
                                <Text style={styles.modalActionText}>
                                    {takePhotoTitle}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={onPressLibrary}
                            style={styles.modalButton}
                        >
                            <View style={styles.row}>
                                <Text style={styles.modalActionText}>
                                    {takeLibraryTitle}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.cancelModalRow}>
                            <TouchableOpacity
                                onPress={onRequestClose}
                                style={styles.cancelModalButton}
                            >
                                <View style={styles.row}>
                                    <Text style={styles.modalActionCancelText}>
                                        Cancel
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </RNModal>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',

        marginBottom: 22,
    },
    modalView: {
        // margin: 20,
        marginHorizontal: 25,
        justifyContent: "center",
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        padding: 10,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    modalContainer: {
        padding: 10,
        backgroundColor: Color.withOpacity(Color.mds_global_black_color, 0.2),
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    modalActionRow: {
        borderRadius: 8,
        width: '100%',
        backgroundColor: Color.mds_global_white_color,
    },
    modalButton: {
        height: 48,
        width: '100%',
        borderBottomWidth: 1,
        borderRadius: 8,
        borderColor: Color.mds_global_gray_color,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
    modalActionText: {
        ...Fonts.style.mds_ui_font_body_regular,
    },
    cancelModalButton: {
        height: 48,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalActionCancelText: {
        ...Fonts.style.mds_ui_font_body_regular,
        color: Color.mds_global_main_Yellow_color,
    },
    cancelModalRow: {
        height: 50,
        borderRadius: 8,
        width: '100%',
        backgroundColor: Color.mds_global_white_color,
        marginTop: 2,
    },
})
export default ImageContainer