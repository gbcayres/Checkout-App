import { StyleSheet } from "react-native";

import { theme } from "../../../theme";

const styles = StyleSheet.create({
    inTransaction: {
        backgroundColor: theme.colors.green,
    },
    outTransaction: {
        backgroundColor: theme.colors.red,
    },
    transactionText: {
        fontSize: 18,
        fontFamily: theme.fontFamily.medium,
        textAlign: "left",
    },
});

export default styles;
