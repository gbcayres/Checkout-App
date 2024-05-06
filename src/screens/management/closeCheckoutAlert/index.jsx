import { Text } from 'react-native'

import CustomModal from '../../../components/modal'

import { FontAwesome6 } from '@expo/vector-icons'
import { theme } from '../../../theme'

function CloseCheckoutAlert({ onClose, onConfirm }) {
    return (
        <CustomModal
            onClose={onClose}
            animation="slide"
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                justifyContent: 'flex-end',
            }}
        >
            <CustomModal.Header>
                <CustomModal.Title>Confirmação</CustomModal.Title>
                <FontAwesome6 name="question-circle" size={24} color="black" />
            </CustomModal.Header>
            <CustomModal.Content>
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: theme.fontFamily.medium,
                        textAlign: 'center',
                    }}
                >
                    Deseja fechar o caixa? Ele não pode ser reaberto.
                </Text>
            </CustomModal.Content>
            <CustomModal.Actions>
                <CustomModal.Action
                    title="Fechar"
                    color={theme.colors.blue}
                    onPress={onConfirm}
                />
                <CustomModal.Action
                    title="Cancelar"
                    color={theme.colors.red}
                    onPress={onClose}
                />
            </CustomModal.Actions>
        </CustomModal>
    )
}

export default CloseCheckoutAlert
