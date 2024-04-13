import { TouchableOpacity, Text, StyleSheet } from "react-native";

import styles from "./styles"

function Button({children, onPress, leftIcon, rightIcon}) {
  return (
    <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.5}
        onPress={onPress}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </TouchableOpacity>
  );
}

Button.Text = ({children}) => {
    return <Text style={styles.buttonText}>{children}</Text>
}

export default Button;