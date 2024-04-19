import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveCheckout(date, checkout) {
    const checkoutJson = JSON.stringify(checkout);
    try {
        await AsyncStorage.setItem(date, checkoutJson);
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

export async function dateIsFree(date) {
    const savedCheckout = await AsyncStorage.getItem(date);
    if (savedCheckout) {
        false;
    }
    return true;
}
