import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import Container from "../../components/layout/container";
import Header from "../../components/layout/header";
import Main from "../../components/layout/main";
import Button from "../../components/ui/button";
import Table from "../../components/table";
import CustomText from "../../components/ui/customText";

import { FontAwesome6, Ionicons, Fontisto } from "@expo/vector-icons";

import styles from "./styles";
import { theme } from "../../theme";

import { useCheckoutContext } from "../../contexts/CheckoutContext";
import { saveCheckout, getCheckout } from "../../utils/dataHandler";

function Management({ navigation }) {
    console.log("tela de gerenciamento renderizou");

    const {
        currentCheckoutDate,
        setCurrentCheckoutDate,
        currentCheckout,
        setCurrentCheckout,
    } = useCheckoutContext();

    const resetCurrentCheckout = () => {
        setCurrentCheckout(null);
        setCurrentCheckoutDate("");
    };

    const closeCheckout = () => {
        resetCurrentCheckout();
        navigation.goBack();
    };

    const tableHead = ["Tipo", "Valor", "Pagamento"];
    const [transactions, setTransactions] = useState([]);

    const createNewTransaction = () => {
        const newTransaction = [
            "Entrada",
            "R$8,00",
            "Pix",
            {
                impressao: {
                    colorido: false,
                    tipoFolha: "A4",
                    quantidade: 30,
                },
            },
        ];
        return newTransaction;
    };

    const loadCheckoutData = async () => {
        try {
            const loadedCheckout = await getCheckout(currentCheckoutDate);
            setCurrentCheckout(loadedCheckout);
            setTransactions(loadedCheckout.transactions || null);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadCheckoutData();
    }, []);

    useEffect(() => {
        const updatedCheckout = {
            ...currentCheckout,
            transactions,
        };
        saveCheckout(currentCheckoutDate, updatedCheckout);
        setCurrentCheckout(updatedCheckout);
        console.log(updatedCheckout);
    }, [transactions]);

    const addTransaction = () => {
        const newTransaction = createNewTransaction();
        setTransactions((prevTransactions) => [
            newTransaction,
            ...prevTransactions,
        ]);
        console.log("adding transaction");
    };

    return (
        <Container>
            <Header>
                <Header.Title>Gerenciar Caixa</Header.Title>
                <View style={styles.headerSection}>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.5}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={54}
                                color={theme.colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerInfoContainer}>
                        <CustomText
                            style={styles.headerInfo}
                            leftIcon={
                                <FontAwesome6
                                    name="calendar-days"
                                    size={18}
                                    color={theme.colors.pink}
                                />
                            }
                        >
                            Dia: <Text>{currentCheckoutDate}</Text>
                        </CustomText>
                        <CustomText
                            style={styles.headerInfo}
                            leftIcon={
                                <FontAwesome6
                                    name="play-circle"
                                    size={18}
                                    color={theme.colors.pink}
                                />
                            }
                        >
                            Saldo Inicial:
                            <Text>{currentCheckout?.openBalance}</Text>
                        </CustomText>
                    </View>
                </View>
            </Header>

            <Main>
                <View style={styles.currentBalanceContainer}>
                    <Text style={styles.currentBalance}>Saldo Atual:</Text>
                    <CustomText
                        leftIcon={
                            <Fontisto
                                name="flag"
                                size={28}
                                color={theme.colors.pink}
                            />
                        }
                        style={styles.currentBalanceValue}
                    >
                        {currentCheckout?.currentBalance}
                    </CustomText>
                </View>
                <Button onPress={addTransaction}>
                    <Button.Text>Registrar Transação</Button.Text>
                </Button>
                <Button onPress={closeCheckout}>
                    <Button.Text>Fechar Caixa</Button.Text>
                </Button>
                <Table
                    tableTitle="Transações do dia"
                    headerData={tableHead}
                    tableData={transactions}
                />
            </Main>
        </Container>
    );
}

export default Management;
