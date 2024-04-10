import { View, Text, SafeAreaView } from "react-native"

import { MaterialIcons } from '@expo/vector-icons';

import { FontAwesome6 } from '@expo/vector-icons';

import Button from "../../components/button";

import styles from './styles'
import { theme } from "../../theme";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Bem Vindo ao</Text>
        <Text style={styles.title}>
            Checkout App
        </Text>
      </View>
      <View style={styles.main}> 
        <FontAwesome6 
          style={styles.logo}
          name="money-bill-transfer" 
          size={150}
          color={theme.colors.pink}
        />
        <View style={styles.buttonContainer}>
          <Button>
            <Button.Text>Abrir Caixa</Button.Text>
            <MaterialIcons 
              name="shopping-cart-checkout" 
              size={24} 
              color={theme.colors.white} />
          </Button>
          <Button>
            <Button.Text>Historico de Caixas</Button.Text>
            <MaterialIcons 
              name="history" 
              size={24} 
              color={theme.colors.white} />
          </Button>
        </View>

      </View>
    </SafeAreaView>
  );
}

export default Home