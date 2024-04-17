import { useState, useContext } from "react";
import { View, Text} from "react-native";
import { TextInputMask } from "react-native-masked-text";

import Container from "../../components/layout/container";
import Header from "../../components/layout/header";
import Main from "../../components/layout/main";
import Button from "../../components/ui/button";
import CustomModal from "../../components/modal"

import { MaterialIcons, FontAwesome6 } from '@expo/vector-icons';

import styles from './styles';
import { theme } from "../../theme"

import { CheckoutContext } from "../../context/CheckoutContext";
import { saveCheckout } from "../../data/dataHandler"

function Home({navigation}) {
    const {openCheckoutDate, setOpenCheckoutDate, isCheckoutOpen, setIsCheckoutOpen} = useContext(CheckoutContext);

    const [IsModalVisible, setIsModalVisible] = useState(false);
    const [date, setDate] = useState('');
    const [openBalance, setOpenBalance] = useState('');

    const openModal = () => {
        setIsModalVisible(true);
    }

    const closeModal = () => {
        setIsModalVisible(false);
        resetForm();
        console.log('closing modal and resetting');
    }

    const resetForm = () => {
        setDate('');
        setOpenBalance('');
    }

    const openNewCheckout = async () => {
        const newCheckout = { openBalance };
        console.log(`Date before setState ${date}`);
        await saveCheckout(date, newCheckout);
        setOpenCheckoutDate(date);
        console.log(`openCheckoutDate after setState ${openCheckoutDate}`);
        setIsCheckoutOpen(true);
    }

    const handleConfirm = async () => {
        openNewCheckout();
        closeModal();
        navigation.navigate("Management");
    }

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
                    {isCheckoutOpen ? (
                        <Button onPress={() => navigation.navigate("Management")}>
                            <Button.Text>Gerenciar Caixa</Button.Text>
                        </Button>
                    ) : (
                        <Button onPress={openModal}>
                            <Button.Text>Abrir Caixa</Button.Text>
                        </Button>
                    )}
                    <Button>
                        <Button.Text>Historico de Caixas</Button.Text>
                        <MaterialIcons 
                            name="history" 
                            size={26} 
                            color={theme.colors.white}
                        />
                    </Button>
                </View>
            </Main>
            <CustomModal 
                visible={IsModalVisible} 
                onClose={closeModal}
                animation="fade"
            >
                <CustomModal.Title>Informações de Caixa</CustomModal.Title>
                <CustomModal.Content>
                    <View style={styles.section}>
                        <Text style={styles.sectionLabel}>Data do caixa:</Text>
                        <View style={styles.inputContainer}>
                            <FontAwesome6 name="calendar-days" size={22} color={theme.colors.gray_200} />
                            <TextInputMask 
                                style={styles.input}
                                placeholderTextColor={theme.colors.gray_200}
                                type="datetime"
                                value={date}
                                options={{
                                    format: "DD/MM/YYYY"
                                }}
                                onChangeText={text => setDate(text)}
                                placeholder="DD/MM/YYYY"
                            />
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionLabel}>Caixa Inicial:</Text>
                        <View style={styles.inputContainer}>
                            <FontAwesome6 name="money-bill-1" size={24} color={theme.colors.gray_200} />
                            <TextInputMask
                                placeholderTextColor={theme.colors.gray_200}
                                style={styles.input}
                                type="money"
                                options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: 'R$',
                                }}
                                value={openBalance}
                                onChangeText={text => setOpenBalance(text)}
                                placeholder="R$0,00"
                            />
                        </View>
                    </View>
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
        </Container>
    );
}

export default Home;
