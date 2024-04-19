import React from "react";
import { View, Text } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import { theme } from "../../../theme";
import styles from "./styles";

const CustomInput = ({
    label,
    value,
    onChangeText,
    placeholder,
    type,
    options,
    icon,
}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                {icon}
                <TextInputMask
                    placeholderTextColor={theme.colors.gray_200}
                    style={styles.input}
                    type={type}
                    options={options}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                />
            </View>
        </View>
    );
};

export default CustomInput;
