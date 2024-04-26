import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Fonts from '../../contstants/Fonts'
import Color from '../../contstants/Color'

type Props = {
    title: string,
    text: string,
    extraText?: string
}
export const AuthenticationScreenHeader = ({ text, title, extraText }: Props) => {
    return (
        <View style={styles?.mainView}>
            <Text style={styles.titlestyle}>
                {title}

            </Text>
            <Text style={styles.textStyle}>
                {text}
                <Text style={{ color: Color.mds_global_main_Yellow_color, paddingHorizontal: 1 }}>{extraText}</Text>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    titlestyle: {
        ...Fonts.style.mds_ui_gothic_font_heading2_thin,
        color: Color.mds_global_black_color
    },
    textStyle: {
        ...Fonts.style.mds_ui_gothic_font_body_thin,
        color: Color.mds_global_gray_color,
        lineHeight: 22,

    },
    mainView: {
        display: "flex",
        flexDirection: "column",
        gap: 5
    }
})
