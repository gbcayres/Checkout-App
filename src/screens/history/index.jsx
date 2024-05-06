import { View, TouchableOpacity, Text, FlatList } from 'react-native'

import Container from '../../components/layout/container'
import Header from '../../components/layout/header'
import Main from '../../components/layout/main'
import Checkout from './checkout'
import Button from './../../components/ui/button'
import CleanCheckoutsModal from './cleanCheckoutsAlert'

import styles from './styles'
import { theme } from '../../theme'

import { Ionicons } from '@expo/vector-icons'

import useCheckouts from '../../hooks/useCheckouts'
import { useState } from 'react'

function History({ navigation }) {
    console.log('tela history renderizou')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { checkouts, cleanCheckouts } = useCheckouts()

    const openModal = () => setIsModalOpen(true)

    const closeModal = () => setIsModalOpen(false)

    return (
        <Container>
            <Header>
                <Header.Title>Histórico de Caixas</Header.Title>
                <TouchableOpacity
                    style={styles.backContainer}
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.5}
                >
                    <Ionicons
                        name="arrow-back"
                        size={48}
                        color={theme.colors.white}
                    />
                    <Text style={styles.backMessage}>Voltar para a Home</Text>
                </TouchableOpacity>
            </Header>
            <Main>
                {checkouts && checkouts.length > 0 ? (
                    <View style={styles.checkoutsContainer}>
                        <Button onPress={openModal}>
                            <Button.Text>Limpar Registros</Button.Text>
                        </Button>
                        <Text style={styles.historyTitle}>
                            Caixas Registrados
                        </Text>
                        <FlatList
                            data={checkouts}
                            renderItem={({ item }) => (
                                <Checkout checkoutData={item} />
                            )}
                        />
                    </View>
                ) : (
                    <Text style={styles.emptyMessage}>
                        Nenhum caixa registrado
                    </Text>
                )}
            </Main>

            {isModalOpen && (
                <CleanCheckoutsModal
                    onClose={closeModal}
                    onConfirm={cleanCheckouts}
                />
            )}
        </Container>
    )
}

export default History
