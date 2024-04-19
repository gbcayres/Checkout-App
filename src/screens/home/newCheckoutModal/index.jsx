import { useState } from "react";

import CustomModal from "../../../components/modal";
import CustomInput from "../../../components/ui/customInput";
import UsedDataAlert from "../usedDateAlert";

import { theme } from "../../../theme";

import { FontAwesome6 } from "@expo/vector-icons";

import { useCheckoutContext } from "../../../contexts/CheckoutContext";
import { saveCheckout, checkDateIsFree } from "../../../utils/dataHandler";

function NewCheckoutModal({ setIsVisible, navigation }) {
    const {
        currentCheckout,
        currentCheckoutDate,
        setCurrentCheckout,
        setCurrentCheckoutDate,
    } = useCheckoutContext();

    console.log(
        "current checkout and date:",
        currentCheckout,
        currentCheckoutDate
    );

    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const [newCheckoutForm, setNewCheckoutForm] = useState({
        date: "",
        openBalance: "",
    });

    console.log(newCheckoutForm);

    const handleDate = (text) => {
        setNewCheckoutForm((prev) => ({
            ...prev,
            date: text,
        }));
    };

    const handleOpenBalance = (text) => {
        setNewCheckoutForm((prev) => ({
            ...prev,
            openBalance: text,
        }));
    };

    const resetForm = () => {
        setNewCheckoutForm({
            date: "",
            openBalance: "",
        });
    };

    const closeModal = () => {
        setIsVisible(false);
        resetForm();
    };

    const createNewCheckout = () => {
        const newCheckout = {
            openBalance: newCheckoutForm.openBalance,
            currentBalance: newCheckoutForm.openBalance,
            transactions: [],
        };
        return newCheckout;
    };

    const getNewCheckoutDate = () => {
        const newCheckoutDate = newCheckoutForm.date;
        return newCheckoutDate;
    };

    const createNewCheckoutAndDate = () => {
        const newCheckout = createNewCheckout();
        const newCheckoutDate = getNewCheckoutDate();
        return [newCheckoutDate, newCheckout];
    };

    const updateCheckoutContext = (newCheckoutDate, newCheckout) => {
        setCurrentCheckoutDate(newCheckoutDate);
        setCurrentCheckout(newCheckout);
    };

    const showAlert = () => {
        setIsAlertVisible(true);
    };

    const saveNewCheckout = async (newCheckoutDate, newCheckout) => {
        console.log("date before date is free:", newCheckoutDate);
        const dateIsFree = await checkDateIsFree(newCheckoutDate);
        if (dateIsFree) {
            saveCheckout(newCheckoutDate, newCheckout);
            console.log("date is free:", dateIsFree);
        } else {
            showAlert();
            console.log("date in already in use");
        }
    };

    const openNewCheckout = async () => {
        const [newCheckoutDate, newCheckout] = createNewCheckoutAndDate();
        await saveNewCheckout(newCheckoutDate, newCheckout);
        updateCheckoutContext(newCheckoutDate, newCheckout);
    };

    const handleConfirm = async () => {
        await openNewCheckout();
        // closeModal();
        // navigation.navigate("Management");
    };

    return (
        <>
            <CustomModal onClose={closeModal} animation="fade">
                <CustomModal.Title>Informações de Caixa</CustomModal.Title>
                <CustomModal.Content>
                    <CustomInput
                        icon={
                            <FontAwesome6
                                name="calendar-days"
                                size={24}
                                color={theme.colors.black}
                            />
                        }
                        label="Data do Caixa:"
                        value={newCheckoutForm.date}
                        onChangeText={handleDate}
                        placeholder="DD/MM/YYYY"
                        type="datetime"
                        options={{
                            format: "DD/MM/YYYY",
                        }}
                    />
                    <CustomInput
                        icon={
                            <FontAwesome6
                                name="money-bill-wave"
                                size={24}
                                color="black"
                            />
                        }
                        label="Caixa Inicial:"
                        value={newCheckoutForm.openBalance}
                        onChangeText={handleOpenBalance}
                        placeholder="R$0,00"
                        type="money"
                        options={{
                            precision: 2,
                            separator: ",",
                            delimiter: ".",
                            unit: "R$",
                        }}
                    />
                </CustomModal.Content>
                <CustomModal.Actions>
                    <CustomModal.Action
                        title="Confirmar"
                        color={theme.colors.green}
                        onPress={handleConfirm}
                    />
                    <CustomModal.Action
                        title="Cancelar"
                        color={theme.colors.red}
                        onPress={closeModal}
                    />
                </CustomModal.Actions>
            </CustomModal>

            {isAlertVisible && <UsedDataAlert setVisible={setIsAlertVisible} />}
        </>
    );
}

export default NewCheckoutModal;
