import { ActivityIndicator } from "react-native";

import { theme } from "../../../theme";
import styles from './styles'

function Loading() {
    return <ActivityIndicator 
        style={styles.loading}
        color={theme.colors.pink}
        size="big"
    />
}

export default Loading;