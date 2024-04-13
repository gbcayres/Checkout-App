import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
    section: {
        width: "70%",
        alignItems: "center",
        gap: 5
    },
    sectionLabel: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 16,
        fontStyle: "italic",
    },
    inputContainer: {
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 0,
        paddingBottom: 0,
        padding: 8,
        borderColor: theme.colors.gray_200,
        borderWidth: 3,
        borderRadius: 12
    },
    input: {
        flex: 1,
        textAlign: "center",
        fontSize: 20,
        fontFamily: theme.fontFamily.regular,
    }
})

export default styles;