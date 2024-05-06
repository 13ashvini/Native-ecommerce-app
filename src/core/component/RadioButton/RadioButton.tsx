import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Fonts from '../../contstants/Fonts';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import Color from '../../contstants/Color';

interface Option {
    label: string;
    value: string;
}

interface Props {
    options: Option[];
    onSelect: (option: Option) => void;
    containerStyle?: any;
    buttonStyle?: any;
    selectedButtonStyle?: any;
    textStyle?: any;
    optionBorderStyle?: any;
    selectedOptionBorderStyle?: any
    label?: string
    disabled?: boolean

}

const RadioButton: React.FC<Props> = ({
    options,
    onSelect,
    containerStyle,
    buttonStyle,
    selectedButtonStyle,
    textStyle,
    optionBorderStyle,
    selectedOptionBorderStyle,
    label,
    disabled
}) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <View>
                {label && (
                    <Text
                        style={styles.labeltext}
                    >

                        {label}
                    </Text>
                )}
            </View>
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                {options.map((option) => (
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                        <TouchableOpacity
                            key={option.value}
                            onPress={() => handleSelect(option)}
                            style={[
                                styles.optionButton,
                                buttonStyle,
                                selectedOption === option && styles.selectedOptionButton,
                                selectedOption === option && selectedButtonStyle,
                            ]}
                        >
                            <View style={[styles.optionBorder, optionBorderStyle, selectedOption === option && styles.selectedOptionBorder,
                            selectedOption === option && selectedOptionBorderStyle,
                            ]}>
                                <Text style={[styles.optionText,]}></Text>
                            </View>

                        </TouchableOpacity>
                        <Text style={[styles.labelStyle, textStyle]}>{option.label}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'space-evenly'
    },
    optionButton: {
        borderColor: '#ccc',
        borderRadius: 30,
        height: 13,
        width: 13,
        justifyContent: "center",
        alignItems: "center"

    },
    optionBorder: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 30,
        height: 20,
        width: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 10

    },
    selectedOptionButton: {
        backgroundColor: Color.mds_global_main_Yellow_color, // Change to your desired selected color
        borderColor: Color.mds_global_main_Yellow_color, // Change to your desired selected color
    },
    selectedOptionBorder: {
        borderColor: Color.mds_global_main_Yellow_color
    },
    optionText: {
        fontSize: 16,
        color: 'black',

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

export default RadioButton;





//     const handleSelect = (option) => {
//         console.log('Selected option:', option);
//         // You can do whatever you need with the selected option here
//     };

//     return (
//         <CustomRadio
//             options={options}
//             onSelect={handleSelect}
//             containerStyle={{ marginVertical: 10 }}
//             buttonStyle={{ backgroundColor: 'lightgray' }}
//             selectedButtonStyle={{ backgroundColor: Color.mds_global_black_color }}
//             textStyle={{ color: 'white' }}
//         />
//     );
// };

// export default YourComponent;
