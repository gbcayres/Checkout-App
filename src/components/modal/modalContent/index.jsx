import { View, ScrollView } from 'react-native'

import styles from './styles'

function ModalContent({ children }) {
    return <View style={styles.modalContent}>{children}</View>
}

export default ModalContent
