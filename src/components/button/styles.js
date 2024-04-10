import { StyleSheet } from "react-native";

import { theme } from "../../theme";

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        backgroundColor: theme.colors.blue,
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 20,
        width: "100%",    
    },
    buttonText: {
        fontSize: 18,
        fontFamily: theme.fontFamily.medium,
        color: theme.colors.white
    }
});

export default styles;