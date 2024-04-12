import { StyleSheet } from "react-native";

import { theme } from "../../../theme";

const styles = StyleSheet.create({
    transaction: {
        padding: 8,
        backgroundColor: theme.colors.white,
    },
    transactionText: {
        fontSize: 18,
        fontFamily: theme.fontFamily.medium,
        textAlign: "center"
    }
})

export default styles;