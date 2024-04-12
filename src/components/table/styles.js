import { StyleSheet } from "react-native";

import { theme } from "../../theme";

const styles = StyleSheet.create({
    scrollWrapper: {
        width: "100%"
    },
    historyContainer: {
        width: "100%",
        flex: 1,
        backgroundColor: theme.colors.gray_800,
        borderRadius: 16,
    },
})

export default styles;