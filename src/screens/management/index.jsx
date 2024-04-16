import { useContext } from "react";
import { Text, View, TouchableOpacity} from "react-native";

import Container from "../../components/layout/container";
import Header from "../../components/layout/header";
import Main from "../../components/layout/main";
import Button from "../../components/ui/button";
import Table from "../../components/table";
import CustomText from "../../components/ui/customText";

import { FontAwesome6, Ionicons } from '@expo/vector-icons';

import styles from "./styles";
import { theme } from "../../theme";

import { CheckoutContext } from "../../context/CheckoutContext";

function Management({navigation}) {
    const { checkoutDate, setIsCheckoutOpen} = useContext(CheckoutContext);

    const closeCheckout = () => {
        setIsCheckoutOpen(false);
        navigation.goBack();
    }

    const tableHead = ['Tipo', 'Valor', 'Pagamento'];
    const tableData = [
        ['Entrada', "R$10,00", 'Dinheiro', {
            impressao: {
                colorido: false, 
                tipoFolha: "A4",
                quantidade: 30
            }
        }],
        ['Saída', "R$1,00", '', {
            impressao: {
                colorido: false, 
                tipoFolha: "A4",
                quantidade: 30
            }
        }],
    ];

  return (
    <Container>
        <Header>
            <Header.Title>Gerenciar Caixa</Header.Title>
            <View style={styles.headerSection}>
                <View>
                    <TouchableOpacity
                        onPress={() =>  navigation.goBack()}
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
                        Dia: <Text>{checkoutDate}</Text>
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
                        Saldo Inicial: <Text>50</Text>
                    </CustomText>
                </View>
            </View>
        </Header>

        <Main>
            <Text style={styles.currentBalance}>
                Saldo Atual: <Text style={styles.currentBalanceValue}>R$100</Text>
            </Text>
            <Button>
                <Button.Text>Registrar Transação</Button.Text>
            </Button>
            <Button onPress={closeCheckout}>
                <Button.Text>Fechar Caixa</Button.Text>
            </Button>
            <Table 
                tableTitle="Transações do dia"
                headerData={tableHead} 
                tableData={tableData}
            />
        </Main>
    </Container>
  )
}

export default Management;