import { SafeAreaView } from "react-native"

import styles from "./styles";

function Container({children}) {
  return (
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
  )
}

export default Container;