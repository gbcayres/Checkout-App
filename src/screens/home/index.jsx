import { View, Text } from "react-native"

import Header from "../../components/layout/header";
import Main from "../../components/layout/main";
import Button from "../../components/ui/button";

import { MaterialIcons, FontAwesome6 } from '@expo/vector-icons';

import styles from './styles'
import { theme } from "../../theme";
import Container from "../../components/layout/container";

function Home() {
  return (
    <Container>
      <Header>
        <Text style={styles.greeting}>Bem Vindo ao</Text>
        <Text style={styles.homeTitle}>Checkout App</Text>
      </Header>
      <Main> 
        <FontAwesome6 
          style={styles.logo}
          name="money-bill-transfer" 
          size={150}
          color={theme.colors.white}
        />
        <View style={styles.buttonContainer}>
          <Button>
            <Button.Text>Abrir Caixa</Button.Text>
            <MaterialIcons
              name="attach-money" 
              size={22} 
              color={theme.colors.pink} />
          </Button>
          <Button>
            <Button.Text>Historico de Caixas</Button.Text>
            <MaterialIcons 
              name="history" 
              size={22} 
              color={theme.colors.pink} />
          </Button>
        </View>

      </Main>
    </Container>
  );
}

export default Home