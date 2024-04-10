import { TouchableOpacity, Text, onPress } from "react-native";

import styles from "./styles"

function Button({children}) {
  return (
    <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.5}
        onPress={onPress}
    >
        {children}
    </TouchableOpacity>
  );
}

Button.Text = ({children}) => {
    return <Text style={styles.buttonText}>{children}</Text>
}

export default Button;