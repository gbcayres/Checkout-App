import { StyleSheet } from "react-native";

import { theme } from "../../theme";

const styles = StyleSheet.create({
    backContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 45,
    },
    backMessage: {
        fontSize: 24,
        color: theme.colors.white,
    },
    checkoutsContainer: {
        flex: 1,
        width: "100%",
        overflow: "hidden",
    },
    historyTitle: {
        width: "100%",
        textAlign: "center",
        fontSize: 20,
        backgroundColor: theme.colors.gray_600,
        fontFamily: theme.fontFamily.medium,
        padding: 8,
        color: theme.colors.white,
        marginTop: 20,
    },
    emptyMessage: {
        textAlign: "center",
        fontSize: 20,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.medium,
    },
});

export default styles;
