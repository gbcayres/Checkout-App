import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveCheckout(date, checkout) {
    try {
        const checkoutJson = JSON.stringify(checkout);
        await AsyncStorage.setItem(date, checkoutJson);
        console.log("checkout saved:", checkout);
    } catch (error) {
        console.log("we got a error opening the checkout:", error);
    }
}

export async function getCheckoutData(date) {
    try {
        const checkoutJson = await AsyncStorage.getItem(date);
        const checkout = JSON.parse(checkoutJson);
        console.log("checkout retrieved:", checkout);
        return checkout;
    } catch (error) {
        console.log("we got a error getting the checkout:", checkout)
        return null;
    }
}
