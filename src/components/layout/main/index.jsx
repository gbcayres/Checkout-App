import { View } from 'react-native';

import styles from "./styles";

function Main({children, style}) {
  return (
    <View style={[styles.main, style]}>
        {children}
    </View>
  )
}

export default Main;