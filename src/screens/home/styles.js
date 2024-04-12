import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
    greeting: {
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.white,
        fontSize: 20,
        fontStyle: "italic"
    },
    homeTitle: {
        fontFamily: theme.fontFamily.home_title,
        fontSize: 60,
        color: theme.colors.white,
        marginBottom: -40,
        textShadowColor: theme.colors.cyan,
        textShadowOffset: {width: -4, height: 2},
        textShadowRadius: 1
    },
    buttonContainer: {
        marginTop:  50,
        width: "100%",
        gap: 15
    },
})

export default styles;