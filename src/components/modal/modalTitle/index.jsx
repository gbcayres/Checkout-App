import { Text } from "react-native";

import styles from "./styles";

function ModalTitle({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default ModalTitle;