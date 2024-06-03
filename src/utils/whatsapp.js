import { Linking } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function hasWppNumber() {
    try {
        const number = await AsyncStorage.getItem('wppNumber')
        return number !== null
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function saveNumber(number) {
    try {
        AsyncStorage.setItem('wppNumber', number)
        console.log(`numero salvo: ${number}`)
    } catch (error) {
        console.log(error)
    }
}

export async function sendReport(checkout) {
    try {
        const number = await AsyncStorage.getItem('wppNumber')
        if (number) {
            const message = `
              Caixa Salvo no Dia ${checkout.date}!\n
              \tSaldo Inicial: ${checkout.openBalance}\n
              \tSaldo Final: ${checkout.finalBalance}\n
              \tTotal de Entrada: ${checkout.totalCashIn}\n
              \tTotal de Saída: ${checkout.totalCashOut}\n
              \tTotal de Transações: ${checkout.transactions.length}
            `
            console.log(message)

            const url = `whatsapp://send?phone=${number}&text=${encodeURIComponent(
                message
            )}`

            const supported = await Linking.canOpenURL(url)

            if (supported) {
                await Linking.openURL(url)
            } else {
                throw new Error('Whatsapp is not installed')
            }
        } else {
            throw new Error('No number found')
        }
    } catch (error) {
        console.log(error)
    }
}
