import { StyleSheet } from "react-native";

import { theme } from "../../../theme";

const styles = StyleSheet.create({
    header: {
        backgroundColor: theme.colors.blue,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 5
    },
    title: {
        fontSize: 36,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.bold
    }
})

export default styles;