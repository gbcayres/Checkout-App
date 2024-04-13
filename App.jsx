import { StatusBar } from "react-native";

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
    <> 
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* <History /> */}
      {/* <Management /> */}
      <Home />
    </>
  );
}