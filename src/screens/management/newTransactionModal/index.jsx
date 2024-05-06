import { useState } from 'react'

import CustomModal from '../../../components/modal'
import CustomInput from '../../../components/ui/customInput'
import CustomPicker from '../../../components/ui/customPicker'
import { Picker } from '@react-native-picker/picker'

import { theme } from '../../../theme'

import { FontAwesome6, FontAwesome, MaterialIcons } from '@expo/vector-icons'

function NewTransactionModal({ onClose, setTransactions }) {
    const [newTransaction, setNewTransaction] = useState({
        type: '',
        value: '',
        payment: '',
    })

    console.log(newTransaction)

    const resetForm = () => {
        setNewTransaction({
            type: '',
            value: '',
            payment: '',
        })
    }

    const closeModal = () => {
        onClose()
        resetForm()
    }

    const handleType = (text) => {
        setNewTransaction((prevTransaction) => ({
            ...prevTransaction,
            type: text,
        }))
    }

    const handleValue = (text) => {
        setNewTransaction((prevTransaction) => ({
            ...prevTransaction,
            value: text,
        }))
    }

    const handlePayment = (text) => {
        setNewTransaction((prevTransaction) => ({
            ...prevTransaction,
            payment: text,
        }))
    }

    const addTransaction = () => {
        setTransactions((prevTransactions) => [
            newTransaction,
            ...prevTransactions,
        ])
        console.log('adding transaction:', newTransaction)
    }

    const handleConfirm = () => {
        addTransaction()
        closeModal()
    }

    return (
        <>
            <CustomModal onClose={closeModal} animation="fade">
                <CustomModal.Title>Inserir transação</CustomModal.Title>
                <CustomModal.Content>
                    <CustomPicker
                        label="Tipo:"
                        icon={
                            <FontAwesome
                                name="exchange"
                                size={22}
                                color="black"
                            />
                        }
                        selectedValue={newTransaction.type}
                        onValueChange={handleType}
                    >
                        <Picker.Item
                            label="Escolha uma opção"
                            enabled={false}
                        />
                        <Picker.Item label="Entrada" value="Entrada" />
                        <Picker.Item label="Saída" value="Saída" />
                    </CustomPicker>
                    <CustomInput
                        icon={
                            <MaterialIcons
                                name="attach-money"
                                size={28}
                                color="black"
                            />
                        }
                        label="Valor:"
                        value={newTransaction.value}
                        onChangeText={handleValue}
                        placeholder="R$0,00"
                        type="money"
                        options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$',
                        }}
                    />
                    <CustomPicker
                        label="Forma de Pagamento:"
                        icon={
                            <FontAwesome6
                                name="money-check"
                                size={24}
                                color="black"
                            />
                        }
                        selectedValue={newTransaction.payment}
                        onValueChange={handlePayment}
                    >
                        <Picker.Item label="Escolha uma opção" />
                        <Picker.Item label="PIX" value="PIX" />
                        <Picker.Item label="Dinheiro" value="Dinheiro" />
                        <Picker.Item label="Crédito" value="Crédito" />
                        <Picker.Item label="Débito" value="Débito" />
                    </CustomPicker>
                </CustomModal.Content>
                <CustomModal.Actions>
                    <CustomModal.Action
                        title="Confirmar"
                        color={theme.colors.green}
                        onPress={handleConfirm}
                    />
                    <CustomModal.Action
                        title="Cancelar"
                        color={theme.colors.red}
                        onPress={closeModal}
                    />
                </CustomModal.Actions>
            </CustomModal>
        </>
    )
}

export default NewTransactionModal
