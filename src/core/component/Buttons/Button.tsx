import React, { ReactNode } from 'react'
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import Color from '../../contstants/Color';
import Fonts from '../../contstants/Fonts';

type Props = {
    onPress: (value: any) => void
    title: ReactNode
    textStyle?: any
    buttonstyle?: any
    loader?: boolean
    small?: boolean
    loaderColor? :any
}
const Button = ({ onPress, title, textStyle, loader,small,loaderColor }: Props) => {
    return (
        <View>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    textStyle,
                    styles.container
                ]}>
                {loader && (
                    <ActivityIndicator

                        size={small? 'small' : 'large'}
                        color={loaderColor}
                    />
                )}
                {!loader && (
                    <View style={[styles.button, textStyle,]}>{title}</View>
                )}

                {/* {({ pressed }) => (
                    
                 
                )} */}
            </Pressable>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: Color.mds_global_main_Yellow_color,
        padding: 15,
        borderRadius: 8,
        ...Fonts.style.mds_ui_gothic_font_subText_bold,
        color: Color.mds_global_white_color,
        marginHorizontal: 10
    },
    pressed: {
        backgroundColor: "transparent",
    },
    disabled: {
        backgroundColor: Color.mds_global_main_Yellow_color,
        opacity: 1,
    },
    textDisabled: {
        color: Color.mds_global_white_color
    }
})