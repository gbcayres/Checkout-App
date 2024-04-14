import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import Container from "../../components/layout/container";
import Header from "../../components/layout/header";
import Main from "../../components/layout/main";
import Button from "../../components/ui/button";
import Table from "../../components/table";
import CustomText from "../../components/ui/customText";

import { FontAwesome6, Ionicons } from '@expo/vector-icons';

import styles from "./styles";
import { theme } from "../../theme";
import { TouchableOpacity } from "react-native-gesture-handler";

function Management({navigation}) {
    const route = useRoute();
    const { setIsCheckoutOpen } = route.params;

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
                        Dia: <Text>12/04/2024</Text>
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
                        Saldo Inicial: <Text>R$50</Text>
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