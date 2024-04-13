import { Text, View } from "react-native";

import styles from "./styles";

function ModalHeader({children, style}) {
  return (
    <View style={[styles.modalHeader, style]}>
        {children}
    </View>
  )
}

export default ModalHeader;