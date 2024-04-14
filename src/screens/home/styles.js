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
    inputLabel: {
        fontFamily: theme.fontFamily.bold
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        borderRadius: 8,
        borderColor: theme.colors.gray_200,
        borderWidth: 3
    },
    input: {
        flex: 1,
        textAlign: "center",
        fontSize: 16,
        fontFamily: theme.fontFamily.regular,
        paddingVertical: 8,                         
    },
    section: {
        width: "70%",
        alignItems: "center",
        gap: 5
    },
    sectionLabel: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 16,
        fontStyle: "italic",
    },
    inputContainer: {
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 0,
        paddingBottom: 0,
        padding: 8,
        borderColor: theme.colors.gray_200,
        borderWidth: 3,
        borderRadius: 12
    },
    input: {
        flex: 1,
        textAlign: "center",
        fontSize: 20,
        fontFamily: theme.fontFamily.regular,
    }
})

export default styles;