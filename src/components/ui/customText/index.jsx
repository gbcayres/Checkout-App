import { Text, View } from "react-native"

import styles from "./styles";

function CustomText({children, style, leftIcon, rightIcon}) {
  return (
    <View style={styles.textContainer}>
        {leftIcon}
        <Text style={style}>{children}</Text>
        {rightIcon}
    </View>
  )
}

export default CustomText;