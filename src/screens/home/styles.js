import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
    greeting: {
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.white,
        fontSize: 22,
        fontStyle: "italic"
    },
    homeTitle: {
        fontFamily: theme.fontFamily.home_title,
        fontSize: 90,
        color: theme.colors.white,
        marginBottom: -50,
        textAlign: "center",
        textShadowColor: theme.colors.cyan,
        textShadowOffset: {width: -4, height: 2},
        textShadowRadius: 1,
    },
    homeSubtitle: {
        fontFamily: theme.fontFamily.home_title,
        fontSize: 90,
        color: theme.colors.white,
        marginTop: -60,
        textAlign: "right",
        width: "100%",
        textShadowColor: theme.colors.cyan,
        textShadowOffset: {width: -5, height: 3},
        textShadowRadius: 1,
    },
    buttonContainer: {
        marginTop:  50,
        width: "100%",
        gap: 15
    },
})

export default styles;