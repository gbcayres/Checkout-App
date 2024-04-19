import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveCheckout(date, checkout) {
    const checkoutJson = JSON.stringify(checkout);
    try {
        await AsyncStorage.setItem(date, checkoutJson);
        console.log("checkout saved:", checkoutJson);
    } catch (error) {
        console.log("we got a error saving the checkout:", error);
    }
}

export async function getCheckout(date) {
    const checkoutJson = await AsyncStorage.getItem(date);
    if (!checkoutJson) {
        throw new Error(`error while getting data at ${date}`);
    }
    return JSON.parse(checkoutJson);
}

export async function checkDateIsFree(date) {
    const savedCheckoutJson = await AsyncStorage.getItem(date);
    const savedCheckout = JSON.parse(savedCheckoutJson);
    if (!savedCheckout) {
        return true;
    }
    return false;
}
