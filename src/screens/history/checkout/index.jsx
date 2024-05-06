import { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import CustomModal from '../../../components/modal'

import styles from './styles'
import { theme } from '../../../theme'

function Checkout({ checkoutData }) {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const openModal = () => {
        setIsModalVisible(true)
    }

    const closeModal = () => {
        setIsModalVisible(false)
    }

    return (
        <TouchableOpacity
            onPress={openModal}
            style={styles.checkout}
            activeOpacity={0.5}
        >
            <Text style={styles.date}>{checkoutData.date}</Text>
            <View style={styles.checkoutInfoContainer}>
                <View style={styles.checkoutInfo}>
                    <Text style={styles.inLabel}>Entrada:</Text>
                    <Text style={styles.infoValue}>
                        {checkoutData.totalCashIn}
                    </Text>
                </View>
                <View style={styles.checkoutInfo}>
                    <Text style={styles.outLabel}>Saída:</Text>
                    <Text style={styles.infoValue}>
                        {checkoutData.totalCashOut}
                    </Text>
                </View>
                <View style={styles.checkoutInfo}>
                    <Text style={styles.balanceLabel}>Saldo:</Text>
                    <Text style={styles.infoValue}>
                        {checkoutData.finalBalance}
                    </Text>
                </View>
            </View>
            {isModalVisible && (
                <CustomModal animation="slide">
                    <CustomModal.Title>Informações do caixa</CustomModal.Title>
                    <CustomModal.Content>
                        <View>
                            <View style={styles.modalInfoContainer}>
                                <Text style={styles.modalInfoLabel}>Data:</Text>
                                <Text style={styles.modalInfo}>
                                    {checkoutData.date}
                                </Text>
                            </View>
                            <View style={styles.modalInfoContainer}>
                                <Text style={styles.modalInfoLabel}>
                                    Caixa Inicial:
                                </Text>
                                <Text style={styles.modalInfo}>
                                    {checkoutData.openBalance}
                                </Text>
                            </View>
                            <View style={styles.modalInfoContainer}>
                                <Text style={styles.modalInfoLabel}>
                                    Total de Entrada:
                                </Text>
                                <Text style={styles.modalInfo}>
                                    {checkoutData.totalCashIn}
                                </Text>
                            </View>
                            <View style={styles.modalInfoContainer}>
                                <Text style={styles.modalInfoLabel}>
                                    Total de Saída:
                                </Text>
                                <Text style={styles.modalInfo}>
                                    {checkoutData.totalCashOut}
                                </Text>
                            </View>
                            <View style={styles.modalInfoContainer}>
                                <Text style={styles.modalInfoLabel}>
                                    Saldo Final:
                                </Text>
                                <Text style={styles.modalInfo}>
                                    {checkoutData.finalBalance}
                                </Text>
                            </View>
                        </View>
                    </CustomModal.Content>
                    <CustomModal.Actions>
                        <CustomModal.Action
                            title="Ok"
                            color={theme.colors.blue}
                            onPress={closeModal}
                        />
                    </CustomModal.Actions>
                </CustomModal>
            )}
        </TouchableOpacity>
    )
}

export default Checkout
