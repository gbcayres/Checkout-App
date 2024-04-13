import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
    action: {
        paddingVertical: 5,
        paddingHorizontal: 16,
        borderRadius: 8,  
    },
    title: {
        color: theme.colors.white,
        fontFamily: theme.fontFamily.medium,
        fontSize: 15,
        letterSpacing: 1
    }
})

export default styles;