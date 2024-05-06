// import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Fonts from '../../contstants/Fonts';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { ErrorMessage } from 'formik';

type Props = {
    type?: "flat" | "outlined",
    label?: string
    value: any
    onChangeText: (value: any) => void
    disabled?: boolean
    placeholder?: string
    textColor?: string
    underlineColor?: string
    selectionColor?: string
    activeUnderlineColor?: string
    contentStyle?: any
    onBlur?: () => void
    onFocus?: () => void
    multiline?: boolean
    rightIcon?: IconSource | undefined
    leftIcon?: IconSource | undefined
    secureTextEntry?: boolean
    name: string
    activeOutlineColor?: string
    inputlabel?: string
}

const Input = ({
    type,
    label,
    value,
    multiline,
    onChangeText,
    disabled,
    placeholder,
    textColor,
    underlineColor,
    activeUnderlineColor,
    selectionColor,
    contentStyle,
    onBlur,
    onFocus,
    rightIcon,
    leftIcon,
    secureTextEntry,
    name,
    activeOutlineColor,
    inputlabel
}: Props) => {
    return (
        <View style={{ gap: 10 }}>
            <View>
                {inputlabel && (
                    <Text
                        style={styles.labeltext}
                    >
                        {inputlabel}
                    </Text>
                )}
            </View>
            <TextInput
                style={{ fontSize: Fonts.fontSize.body, backgroundColor: "white", paddingBottom: 0 }}
                multiline={multiline}
                onFocus={onFocus}
                onBlur={onBlur}
                contentStyle={contentStyle}
                selectionColor={selectionColor}
                activeUnderlineColor={activeUnderlineColor}
                underlineColor={underlineColor}
                textColor={textColor}
                placeholder={placeholder}
                disabled={disabled}
                mode={type}
                label={label}
                value={value}
                activeOutlineColor={activeOutlineColor}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                right={rightIcon ? <TextInput.Icon icon={rightIcon} /> : undefined}
                left={leftIcon ? <TextInput.Icon icon={leftIcon} /> : undefined}
            />
            {name &&
                <ErrorMessage name={name}>
                    {(errMsg: string) => (
                        <Text style={styles.errorMessage}>
                            {errMsg}
                        </Text>
                    )}
                </ErrorMessage>
            }
        </View>
    );
}

const styles = {
    errorMessage: {
        ...Fonts.style.mds_ui_font_small_medium,
        // position: "absolute",
        color: "red",
        // bottom: 0,
        // borderWidth:4,
        // borderColor:"green"

    },
    labeltext: {
        color: '#374151', // Slate 900 color
        fontWeight: '500', // Medium font weight
        ...Fonts.style.mds_ui_gothic_font_medium_bold,
        display: 'flex', // Flex display
        alignItems: 'flex-start', // Align items to the start
        textTransform: 'capitalize', // Capitalize text
        paddingHorizontal: 4, // Horizontal padding
    },
    disabled: {
        opacity: 0.6, // Reduced opacity when disabled
    },
    // inputView :{
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: 5,
    //     position: "relative",
    // }
}

export default Input;
