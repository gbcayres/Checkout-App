import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import Container from '../../components/layout/container'
import Header from '../../components/layout/header'
import Main from '../../components/layout/main'
import Button from '../../components/ui/button'
import NewCheckoutModal from './newCheckoutModal'

import { MaterialIcons, FontAwesome6 } from '@expo/vector-icons'

import styles from './styles'
import { theme } from '../../theme'

import { useCheckoutContext } from '../../contexts/CheckoutContext'
import { hasWppNumber } from '../../utils/whatsapp'
import SaveNumberModal from './saveNumberModal'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Home({ navigation }) {
    console.log('tela home renderizou')
    const { currentCheckout } = useCheckoutContext()

    const [IsCheckoutModalVisible, setIsCheckoutModalVisible] = useState(false)

    const [IsNumberModalVisible, setIsNumberModalVisible] = useState(false)

    const openModal = () => setIsCheckoutModalVisible(true)

    const closeModal = () => setIsCheckoutModalVisible(false)

    const openSaveNumberModal = () => setIsNumberModalVisible(true)

    const closeSaveNumberModal = () => setIsNumberModalVisible(false)

    useEffect(() => {
        const checkWppNumber = async () => {
            const hasNumber = await hasWppNumber()
            if (!hasNumber) {
                console.log('nao tem numero')
                openSaveNumberModal()
            }
        }
        checkWppNumber()
    }, [])

    return (
        <Container>
            <Header>
                <Text style={styles.greeting}>Bem Vindo ao</Text>
                <Text style={styles.homeTitle}>Checkout</Text>
            </Header>
            <Main>
                <Text style={styles.homeSubtitle}>App</Text>
                <FontAwesome6
                    style={styles.logo}
                    name="money-bill-transfer"
                    size={180}
                    color={theme.colors.pink}
                />
                <View style={styles.buttonContainer}>
                    {currentCheckout ? (
                        <Button
                            onPress={() => navigation.navigate('Management')}
                        >
                            <Button.Text>Gerenciar Caixa</Button.Text>
                        </Button>
                    ) : (
                        <Button onPress={openModal}>
                            <Button.Text>Abrir Caixa</Button.Text>
                        </Button>
                    )}
                    <Button onPress={() => navigation.navigate('History')}>
                        <Button.Text>Historico de Caixas</Button.Text>
                        <MaterialIcons
                            name="history"
                            size={26}
                            color={theme.colors.white}
                        />
                    </Button>
                </View>
            </Main>

            {IsNumberModalVisible && (
                <SaveNumberModal onClose={closeSaveNumberModal} />
            )}

            {IsCheckoutModalVisible && (
                <NewCheckoutModal
                    navigation={navigation}
                    onClose={closeModal}
                />
            )}
        </Container>
    )
}

export default Home
