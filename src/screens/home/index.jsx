import { useState, useContext } from "react";
import { View, Text } from "react-native";

import Container from "../../components/layout/container";
import Header from "../../components/layout/header";
import Main from "../../components/layout/main";
import Button from "../../components/ui/button";
import NewCheckoutModal from "./newCheckoutModal";

import { MaterialIcons, FontAwesome6 } from "@expo/vector-icons";

import styles from "./styles";
import { theme } from "../../theme";

import { useCheckoutContext } from "../../contexts/CheckoutContext";

function Home({ navigation }) {
    console.log("tela home renderizou");
    const { currentCheckout } = useCheckoutContext();

    const [IsModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => setIsModalVisible(true);

    const closeModal = () => setIsModalVisible(false);

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
                            onPress={() => navigation.navigate("Management")}
                        >
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

            {IsModalVisible && (
                <NewCheckoutModal
                    navigation={navigation}
                    setIsVisible={setIsModalVisible}
                    onClose={closeModal}
                />
            )}
        </Container>
    );
}

export default Home;
