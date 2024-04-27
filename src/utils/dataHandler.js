import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveCheckout(date, checkout) {
    const checkoutJson = JSON.stringify(checkout);
    try {
        await AsyncStorage.setItem(date, checkoutJson);
        console.log("checkout saved:", checkoutJson, `at date ${date}`);
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

export async function checkIfDateIsFree(date) {
    const savedCheckoutJson = await AsyncStorage.getItem(date);
    const savedCheckout = JSON.parse(savedCheckoutJson);
    if (!savedCheckout) {
        return true;
    }
    return false;
}

export async function getAllDates() {
    const dates = await AsyncStorage.getAllKeys();
    if (!dates) {
        throw new Error("error while getting dates:", error);
    }
    return dates;
}

export async function getAllCheckouts() {
    try {
        const dates = await getAllDates();
        const checkoutsJson = await AsyncStorage.multiGet(dates);
        const checkouts = checkoutsJson.map((item) => JSON.parse(item[1]));
        console.log("checkouts retrieved:", checkouts);
        return checkouts;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function clearCheckouts() {
    AsyncStorage.clear();
}
