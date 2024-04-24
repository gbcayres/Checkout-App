import React from "react";

import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

import styles from "./styles";

const CustomPicker = ({
    children,
    label,
    icon,
    selectedValue,
    onValueChange,
}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.pickerContainer}>
                {icon}
                <Picker
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                >
                    {children}
                </Picker>
            </View>
        </View>
    );
};

CustomPicker.Item = ({ value, label }) => {
    return <Picker.Item value={value} label={label} />;
};

export default CustomPicker;
