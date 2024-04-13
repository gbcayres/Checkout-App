import { useState } from "react";
import { View, Text} from "react-native";

import Header from "../../components/layout/header";
import Main from "../../components/layout/main";
import Button from "../../components/ui/button";
import CustomModal from "../../components/modal";

import { MaterialIcons, FontAwesome6 } from '@expo/vector-icons';

import styles from './styles';
import { theme } from "../../theme";
import Container from "../../components/layout/container";

function Home() {
    const [IsModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
        setIsModalVisible(true);
    }

    const closeModal = () => {
        setIsModalVisible(false);
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
                    <Button onPress={openModal}>
                        <Button.Text>Abrir Caixa</Button.Text>
                        <MaterialIcons
                            name="attach-money" 
                            size={26} 
                            color={theme.colors.white}
                        />
                    </Button>
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
                animation={"fade"}
            >
                <CustomModal.Title>Informações de Caixa</CustomModal.Title>
                <CustomModal.Content>
                   <Text> Testando modal</Text>
                </CustomModal.Content>
                <CustomModal.Actions>
                    <CustomModal.Action 
                        title="action1" 
                        color={theme.colors.green}
                        onPress={() => console.log("action 1!!!")}
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
