import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextStyle } from 'react-native';
import Color from '../../contstants/Color';
import Fonts from '../../contstants/Fonts';
import * as Icon from "../../../core/svg"

interface Option {
    label: string;
    value: string | number;
}

interface Props {
    options: Option[];
    onSelect: (value: string | number) => void;
    selectedValue?: string | number;
    containerStyle?: any;
    optionTextStyle?: TextStyle;
    label: string;
    placeholder?: string; // Add placeholder prop
}

const Select: React.FC<Props> = ({
    options,
    onSelect,
    selectedValue,
    containerStyle,
    optionTextStyle,
    label,
    placeholder = "Select" // Set default placeholder text
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value: string | number) => {
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <View style={{
            gap: 10
        }}>
            <View>
                {label && (
                    <Text
                        style={styles.labeltext}
                    >
                        {label}
                    </Text>
                )}
            </View>
            <View style={[styles.container, containerStyle]}>
                <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={[styles.selected,
                { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }
                ]}>
                    <Text style={styles.optionText}>{selectedValue ? selectedValue : placeholder} </Text>
                    <Icon.DownArrowIcon />
                </TouchableOpacity>
                {isOpen && (
                    <View style={styles.optionsContainer}>
                        {options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleSelect(option.value)}
                                style={styles.option}
                            >
                                <Text style={[styles.optionText, optionTextStyle]}>{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
    },
    selected: {
        borderWidth: 1,
        borderColor: Color.mds_global_gray_color,
        borderRadius: 5,
        padding: 10,
    },
    optionsContainer: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: Color.mds_global_white_color,
        borderWidth: 1,
        borderColor: Color.mds_global_gray_color,
        borderRadius: 5,
        zIndex: 9999,
    },
    option: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: Color.mds_global_gray_color,
    },
    optionText: {
        ...Fonts.style.mds_ui_gothic_font_body_semi,
        color: Color.mds_global_black_color,


    },
    labelStyle: {
        ...Fonts.style.mds_ui_gothic_font_medium_semi,
        color: Color.mds_global_black_color
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
});

export default Select;
