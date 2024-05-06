import { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Container from '../../components/layout/container'
import Header from '../../components/layout/header'
import Main from '../../components/layout/main'
import Button from '../../components/ui/button'
import Table from '../../components/table'
import CustomText from '../../components/ui/customText'
import NewTransactionModal from './newTransactionModal'
import CloseCheckoutAlert from './closeCheckoutAlert'

import { FontAwesome6, Ionicons, Fontisto } from '@expo/vector-icons'

import styles from './styles'
import { theme } from '../../theme'

import { useCheckoutContext } from '../../contexts/CheckoutContext'
import { saveCheckout, getCheckout } from '../../utils/dataHandler'
import {
    parseMoneyStringToFloat,
    parseFloatToMoneyString,
} from '../../utils/formatter'

function Management({ navigation }) {
    console.log('tela de gerenciamento renderizou')

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isAlertOpen, setIsAlertOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)

    const closeModal = () => setIsModalOpen(false)

    const openAlert = () => setIsAlertOpen(true)

    const closeAlert = () => setIsAlertOpen(false)

    const {
        currentCheckoutDate,
        setCurrentCheckoutDate,
        currentCheckout,
        setCurrentCheckout,
    } = useCheckoutContext()

    const tableHead = ['Tipo', 'Valor', 'Pagamento']
    const [transactions, setTransactions] = useState([])

    const resetCurrentCheckout = () => {
        setCurrentCheckout(null)
        setCurrentCheckoutDate('')
    }

    const calculateTotalCashIn = () => {
        let totalCashIn = 0

        transactions.forEach((transaction) => {
            if (transaction.type === 'Entrada') {
                totalCashIn += parseMoneyStringToFloat(transaction.value)
            }
        })

        return parseFloatToMoneyString(totalCashIn)
    }

    const calculateTotalCashOut = () => {
        let totalCashOut = 0

        transactions.forEach((transaction) => {
            if (transaction.type === 'Saída') {
                totalCashOut += parseMoneyStringToFloat(transaction.value)
            }
        })

        return parseFloatToMoneyString(totalCashOut)
    }

    const generateFinalCheckout = () => {
        const finalCheckout = {
            date: currentCheckout.date,
            openBalance: currentCheckout.openBalance,
            transactions: currentCheckout.transactions,
            totalCashIn: calculateTotalCashIn(),
            totalCashOut: calculateTotalCashOut(),
            finalBalance: currentCheckout.currentBalance,
        }
        return finalCheckout
    }

    const saveFinalCheckout = () => {
        const finalCheckout = generateFinalCheckout()
        console.log('depois de criar o final Checkout!:', finalCheckout)
        saveCheckout(currentCheckoutDate, finalCheckout)
    }

    const closeCheckout = () => {
        saveFinalCheckout()
        resetCurrentCheckout()
        navigation.goBack()
    }

    const calculateCurrentBalance = () => {
        let newBalance = parseMoneyStringToFloat(currentCheckout.openBalance)

        transactions.forEach((transaction) => {
            if (transaction.type === 'Entrada') {
                newBalance += parseMoneyStringToFloat(transaction.value)
                console.log(
                    'aumentando:',
                    parseFloatToMoneyString(transaction.value)
                )
            } else if (transaction.type === 'Saída') {
                newBalance -= parseMoneyStringToFloat(transaction.value)
                console.log(
                    'diminuindo:',
                    parseFloatToMoneyString(transaction.value)
                )
            }
        })

        return parseFloatToMoneyString(newBalance)
    }

    const loadCheckoutData = async () => {
        try {
            const loadedCheckout = await getCheckout(currentCheckoutDate)
            setCurrentCheckout(loadedCheckout)
            setTransactions(loadedCheckout.transactions)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadCheckoutData()
    }, [])

    useEffect(() => {
        const updatedCheckout = {
            ...currentCheckout,
            transactions,
            currentBalance: calculateCurrentBalance(),
        }
        saveCheckout(currentCheckoutDate, updatedCheckout)
        setCurrentCheckout(updatedCheckout)
    }, [transactions])

    return (
        <Container>
            <Header>
                <Header.Title>Gerenciar Caixa</Header.Title>
                <View style={styles.headerSection}>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.5}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={54}
                                color={theme.colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerInfoContainer}>
                        <CustomText
                            style={styles.headerInfo}
                            leftIcon={
                                <FontAwesome6
                                    name="calendar-days"
                                    size={18}
                                    color={theme.colors.pink}
                                />
                            }
                        >
                            Dia: <Text>{currentCheckoutDate}</Text>
                        </CustomText>
                        <CustomText
                            style={styles.headerInfo}
                            leftIcon={
                                <FontAwesome6
                                    name="play-circle"
                                    size={18}
                                    color={theme.colors.pink}
                                />
                            }
                        >
                            Saldo Inicial:
                            <Text>{currentCheckout?.openBalance}</Text>
                        </CustomText>
                    </View>
                </View>
            </Header>

            <Main>
                <View style={styles.currentBalanceContainer}>
                    <Text style={styles.currentBalance}>Saldo Atual:</Text>
                    <CustomText
                        leftIcon={
                            <Fontisto
                                name="flag"
                                size={28}
                                color={theme.colors.pink}
                            />
                        }
                        style={styles.currentBalanceValue}
                    >
                        {currentCheckout?.currentBalance}
                    </CustomText>
                </View>
                <Button onPress={openModal}>
                    <Button.Text>Registrar Transação</Button.Text>
                </Button>
                <Button onPress={openAlert}>
                    <Button.Text>Fechar Caixa</Button.Text>
                </Button>
                <Table
                    tableTitle="Transações do dia"
                    headerData={tableHead}
                    tableData={transactions}
                />
            </Main>

            {isModalOpen && (
                <NewTransactionModal
                    onClose={closeModal}
                    setTransactions={setTransactions}
                />
            )}
            {isAlertOpen && (
                <CloseCheckoutAlert
                    onClose={closeAlert}
                    onConfirm={closeCheckout}
                />
            )}
        </Container>
    )
}

export default Management
