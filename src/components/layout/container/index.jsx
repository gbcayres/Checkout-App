import { SafeAreaView } from 'react-native'

import styles from './styles'

function Container({ children, style }) {
    return (
        <SafeAreaView style={[styles.container, style]}>
            {children}
        </SafeAreaView>
    )
}

export default Container
