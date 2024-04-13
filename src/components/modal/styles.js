import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
    modalWrapper: {
        flex: 1,
        width: "100%",
        paddingVertical: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        width: "90%",
        padding: 8,
        borderRadius: 10,
        gap: 10,
        backgroundColor: theme.colors.white
    }
})

export default styles;