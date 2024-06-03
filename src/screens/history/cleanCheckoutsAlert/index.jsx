import { Text } from 'react-native'

import CustomModal from '../../../components/modal'

import Ionicons from '@expo/vector-icons/Ionicons'

import { theme } from '../../../theme'

function CleanCheckoutsModal({ onClose, onConfirm }) {
    const handleConfirm = () => {
        onConfirm()
        onClose()
    }

    return (
        <CustomModal onClose={onClose} animation="fade">
            <CustomModal.Header>
                <CustomModal.Title>Atenção!</CustomModal.Title>
            </CustomModal.Header>
            <CustomModal.Content>
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: theme.fontFamily.medium,
                        textAlign: 'center',
                    }}
                >
                    Deseja limpar os registros? Serão apagados
                    permanentemente...
                </Text>
            </CustomModal.Content>
            <CustomModal.Actions>
                <CustomModal.Action
                    title="Limpar"
                    color={theme.colors.blue}
                    onPress={handleConfirm}
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

export default CleanCheckoutsModal
