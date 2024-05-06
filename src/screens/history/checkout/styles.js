import { StyleSheet, View } from 'react-native'

import { theme } from '../../../theme'

const styles = StyleSheet.create({
    checkout: {
        backgroundColor: theme.colors.white,
        borderWidth: 3,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 5,
    },
    date: {
        textAlign: 'center',
        padding: 2,
        fontFamily: theme.fontFamily.bold,
        borderBottomColor: theme.colors.black,
        borderBottomWidth: 3,
        fontSize: 20,
        color: theme.colors.black,
    },
    checkoutInfoContainer: {
        flexDirection: 'row',
        padding: 8,
    },
    checkoutInfo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inLabel: {
        textAlign: 'center',
        fontFamily: theme.fontFamily.bold,
        fontSize: 16,
        color: theme.colors.green,
    },
    outLabel: {
        textAlign: 'center',
        fontFamily: theme.fontFamily.bold,
        fontSize: 16,
        color: theme.colors.red,
    },
    balanceLabel: {
        textAlign: 'center',
        fontFamily: theme.fontFamily.bold,
        fontSize: 16,
        color: theme.colors.black,
    },
    infoValue: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 18,
    },
    modalContainer: {
        gap: 4,
        textAlign: 'center',
    },
    modalInfoContainer: {
        flexDirection: 'row',
        gap: 4,
    },
    modalInfoLabel: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 15,
    },
    modalInfo: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 18,
    },
})

export default styles
