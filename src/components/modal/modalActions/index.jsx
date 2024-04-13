import { View } from "react-native";

import styles from "./styles";

function ModalActions({children}) {
  return (
    <View style={styles.actionsContainer}>
        {children}
    </View>
  )
}

export default ModalActions;