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
}

const RadioButton: React.FC<Props> = ({
    options,
    onSelect,
    containerStyle,
    buttonStyle,
    selectedButtonStyle,
    textStyle,
    optionBorderStyle,
    selectedOptionBorderStyle
}) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <View style={[styles.container, containerStyle]}>
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
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',

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
        borderWidth: 3,
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
    }
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
