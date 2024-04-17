import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveCheckout(date, checkout) {
    const checkoutJson = JSON.stringify(checkout);
    try {
        await AsyncStorage.setItem(date, checkoutJson);
        console.log(`checkout saved: ${checkoutJson} at ${date}`);
    } catch (error) {
        console.log("we got a error saving the checkout:", error);
    }
}

export async function getCheckout(date) { 
    console.log(`date in getCheckout: ${date}`)
    const checkoutJson = await AsyncStorage.getItem(date);
    if(!checkoutJson) {
        throw new Error(`error while getting data at ${date}`);
    }
    return JSON.parse(checkoutJson);
} 