import { useState } from 'react'

import CustomModal from '../../../components/modal'
import CustomInput from '../../../components/ui/customInput'

import { theme } from '../../../theme'

import { FontAwesome6 } from '@expo/vector-icons'
import { formatWppNumber } from '../../../utils/formatter'
import { saveNumber } from '../../../utils/whatsapp'

function SaveNumberModal({ onClose }) {
    const [number, setNumber] = useState('')

    const handleSave = async () => {
        const wppNumber = formatWppNumber(number)
        console.log(wppNumber)
        saveNumber(wppNumber)
        onClose()
    }

    return (
        <>
            <CustomModal onClose={onClose} animation="fade">
                <CustomModal.Header>
                    <CustomModal.Title>
                        Salve um número para registros
                    </CustomModal.Title>
                </CustomModal.Header>
                <CustomModal.Content>
                    <CustomInput
                        value={number}
                        onChangeText={setNumber}
                        placeholder="(21) 99999-9999"
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) ',
                        }}
                        icon={
                            <FontAwesome6
                                name="phone"
                                size={20}
                                color={theme.colors.gray}
                            />
                        }
                    />
                </CustomModal.Content>
                <CustomModal.Actions>
                    <CustomModal.Action
                        title="Salvar"
                        color={theme.colors.blue}
                        onPress={handleSave}
                    />
                </CustomModal.Actions>
            </CustomModal>
        </>
    )
}

export default SaveNumberModal
