import { StyleSheet } from "react-native";

import { theme } from "../../../theme";

const styles = StyleSheet.create({
    wrapper: {
        width: "70%",
        alignItems: "center",
    },
    label: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 16,
    },
    pickerContainer: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 12,
        borderColor: theme.colors.gray_200,
        borderWidth: 3,
        borderRadius: 12,
    },
    picker: {
        flex: 1,
    },
});

export default styles;
