import { StyleSheet } from 'react-native'

import { theme } from '../../theme'

const styles = StyleSheet.create({
    headerSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    headerInfoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerInfo: {
        fontSize: 18,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.regular,
        fontStyle: 'italic',
    },
    currentBalanceContainer: {
        alignItems: 'center',
    },
    currentBalance: {
        width: '100%',
        fontSize: 24,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.medium,
        textAlign: 'center',
    },
    currentBalanceValue: {
        fontSize: 28,
        color: theme.colors.cyan,
        fontFamily: theme.fontFamily.bold,
    },
})

export default styles
