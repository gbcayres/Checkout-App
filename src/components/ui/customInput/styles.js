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
    inputContainer: {
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        gap: 12,
        borderColor: theme.colors.gray_200,
        borderWidth: 3,
        borderRadius: 12,
    },
    input: {
        flex: 1,
        textAlign: "left",
        fontSize: 20,
        fontFamily: theme.fontFamily.regular,
    },
});

export default styles;
