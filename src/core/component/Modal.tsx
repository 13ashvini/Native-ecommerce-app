import React from 'react'
import {
    Alert, Modal as RNModal,
    StyleSheet, Text, Pressable, View,

} from 'react-native';
import Button from './Buttons/Button';
import Color from '../contstants/Color';
type Props = {
    visible: boolean
}
const Modal = ({ visible }: Props) => {
    return (
        // <View >
        <RNModal
            animationType="slide"
            transparent={true}
            visible={visible}
        // onRequestClose={() => {
        //     Alert.alert('Modal has been closed.');
        //     setModalVisible(!modalVisible);
        // }}
        >
            <View style={styles.mainView}>
                <Text>
                    Log Out
                </Text>
                <Text>
                    Are You Sure You Want To Logout
                </Text>
                <View style={styles.buttonView}>
                    <Button
                        textStyle={styles.cancelButton}
                        onPress={() => { }}
                        title={<Text >Cancel</Text>}
                    >

                    </Button>
                    <Button
                        textStyle={{
                            paddingVertical: 5
                        }}
                        onPress={() => { }}
                        title={<Text style={styles.confirmButton}>Log Out</Text>}
                    >

                    </Button>
                </View>
            </View>
        </RNModal>
        // </View >
    )
}
const styles = StyleSheet.create({
    cancelButton: {
        backgroundColor: Color.mds_global_gray_color,
        color: Color.mds_global_black_color,
        borderRadius: 10,
        paddingVertical: 5
    },
    confirmButton: {
        color: Color.mds_global_white_color,
        borderRadius: 10,
        paddingVertical: 5
    },
    mainView: {
        backgroundColor: "white",
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 1
    },
    buttonView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 12
    },
    textStyle: {
        // fontSize:
    }
    // confirmButton: {
    //     backgroundColor: Color.mds_global_gray_10_color,
    //     color: Color.mds_global_black_color
    // }
})
export default Modal