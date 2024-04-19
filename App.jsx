import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Courgette_400Regular } from "@expo-google-fonts/courgette"

import Home from "./src/screens/home";
import Management from "./src/screens/management";
import History from "./src/screens/history";
import Loading from "./src/components/ui/loading";

import { CheckoutProvider } from "./src/contexts/CheckoutContext";


const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Courgette_400Regular
  })

  if(!fontsLoaded) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CheckoutProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Management" 
            component={Management} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="History" 
            component={History} 
            options={{ headerShown: false }}/>
        </Stack.Navigator>
      </CheckoutProvider>
    </NavigationContainer>
  );
}