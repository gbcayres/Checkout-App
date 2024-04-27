import { StyleSheet } from "react-native";

import { theme } from "../../../theme";

const styles = StyleSheet.create({
    historyHeader: {
        backgroundColor: theme.colors.gray_600,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerLabel: {
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.white,
        fontSize: 14,
        textAlign: "center",
    },
});

export default styles;
