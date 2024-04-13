import { StyleSheet } from "react-native";

import { theme } from "../../../theme";

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        backgroundColor: theme.colors.blue,
        borderRadius: 20,
        width: "100%",
        height: 65  
    },
    buttonText: {
        fontSize: 18,
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.white,
    }
});

export default styles;