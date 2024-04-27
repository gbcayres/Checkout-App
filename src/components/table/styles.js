import { StyleSheet } from "react-native";

import { theme } from "../../theme";

const styles = StyleSheet.create({
    tableContainer: {
        flex: 1,
        width: "100%",
    },
    tableTitle: {
        textAlign: "center",
        fontSize: 20,
        fontFamily: theme.fontFamily.medium,
        color: theme.colors.white,
    },
    table: {
        flex: 1,
        backgroundColor: theme.colors.gray_800,
        borderRadius: 16,
        overflow: "hidden",
    },
});

export default styles;
