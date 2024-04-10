import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.darkGray
    },
    header: {
        backgroundColor: theme.colors.blue,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 8
    },
    greeting: {
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.white,
        fontSize: 20,
        fontStyle: "italic"
    },
    title: {
        fontFamily: theme.fontFamily.home_title,
        fontSize: 60,
        color: theme.colors.white,
        marginBottom: -40,
        textShadowColor: theme.colors.cyan,
        textShadowOffset: {width: -4, height: 2},
        textShadowRadius: 1
    },
    main: {
        flex: 4,
        paddingVertical: 40,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        gap: 50
    },
    buttonContainer: {
        padding: 20,
        width: "100%",
        gap: 15
    },
})

export default styles;