import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkout from "./Checkout";

export async function openCheckout(date, openBalance) {
    try {
        const checkout = new Checkout(openBalance);
        const checkoutJson = JSON.stringify(checkout);
        await AsyncStorage.setItem(date, checkoutJson);
        console.log('checkout saved:', checkout)
    } catch(error) {
        console.log('we got a error opening the checkout:', error);
    }
}