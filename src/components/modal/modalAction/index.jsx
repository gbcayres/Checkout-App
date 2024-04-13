import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

function ModalAction({title, onPress, color}) {
  return (
    <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.action, {backgroundColor: color}]}
        onPress={onPress}
    >
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ModalAction;