import { View, Text } from "react-native";

import styles from "./styles";

function Header({children}) {
  return (
    <View style={styles.header}>
        {children}
    </View>
  )
}

Header.Title = ({children}) => {
  return <Text style={styles.title} >{children}</Text>
}

export default Header;