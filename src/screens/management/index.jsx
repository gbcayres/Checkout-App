import { Text, View } from "react-native";

import Container from "../../components/layout/container";
import Header from "../../components/layout/header";
import Main from "../../components/layout/main";
import Button from "../../components/ui/button";
import Table from "../../components/table";

import { FontAwesome6, FontAwesome } from '@expo/vector-icons';

import styles from "./styles";
import { theme } from "../../theme";

function Management() {
 
    const tableHead = ['Tipo', 'Valor', 'Forma de Pagamento'];
    const tableData = [
        ['Entrada', "R$10,00", 'Pix', {
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
        ['Entrada', "R$10,00", 'Pix', {
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
        ['Entrada', "R$10,00", 'Pix', {
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
        ['Entrada', "R$10,00", 'Pix', {
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
        ['Entrada', "R$10,00", 'Pix', {
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
        ['Entrada', "R$10,00", 'Pix', {
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
        }],['Entrada', "R$10,00", 'Pix', {
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
        }],['Entrada', "R$10,00", 'Pix', {
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
        }],['Entrada', "R$10,00", 'Pix', {
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
        }],['Entrada', "R$10,00", 'Pix', {
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
        }],['Entrada', "R$10,00", 'Pix', {
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
        }],['Entrada', "R$10,00", 'Pix', {
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
            <View style={styles.balanceContainer}>
                <FontAwesome6
                    name="play-circle" 
                    size={18} 
                    color={theme.colors.pink}
                />
                <Text style={styles.inicialBalance}>
                    Saldo Inicial: <Text>R$50</Text>
                </Text>
            </View>
        </Header>

        <Main style={{justifyContent: "flex-start", gap: 15}}>
            <View style={styles.balanceContainer}>
                <FontAwesome name="flag" size={24} color={theme.colors.pink} />
                <Text style={styles.currentBalance}>
                    Saldo Atual: <Text style={styles.currentBalanceValue}>R$100</Text>
                </Text>
            </View>
            <Button>
                <Button.Text>Registrar Transação</Button.Text>
            </Button>
            <Text style={styles.historyTitle}>Histórico</Text>
            <Table 
                headerData={tableHead} 
                tableData={tableData}
            />
        </Main>
    </Container>
  )
}

export default Management;