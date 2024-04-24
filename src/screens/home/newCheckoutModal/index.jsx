import { useState } from "react";

import CustomModal from "../../../components/modal";
import CustomInput from "../../../components/ui/customInput";
import UsedDateAlert from "../usedDateAlert";

import { theme } from "../../../theme";

import { FontAwesome6 } from "@expo/vector-icons";

import { useCheckoutContext } from "../../../contexts/CheckoutContext";
import { saveCheckout, checkIfDateIsFree } from "../../../utils/dataHandler";

function NewCheckoutModal({ navigation, onClose }) {
    const { setCurrentCheckout, setCurrentCheckoutDate } = useCheckoutContext();

    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const [newCheckoutForm, setNewCheckoutForm] = useState({
        date: "",
        openBalance: "",
    });

    const showAlert = () => setIsAlertVisible(true);

    const closeAlert = () => setIsAlertVisible(false);

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

    const handleClose = () => {
        onClose(false);
        resetForm();
    };

    const createNewCheckoutAndDate = () => {
        const newCheckout = {
            openBalance: newCheckoutForm.openBalance,
            currentBalance: newCheckoutForm.openBalance,
            transactions: [],
        };
        const newCheckoutDate = newCheckoutForm.date;
        return [newCheckoutDate, newCheckout];
    };

    const updateCheckoutContext = (newCheckoutDate, newCheckout) => {
        setCurrentCheckoutDate(newCheckoutDate);
        setCurrentCheckout(newCheckout);
    };

    const openNewCheckout = async (newCheckoutDate, newCheckout) => {
        await saveCheckout(newCheckoutDate, newCheckout);
        updateCheckoutContext(newCheckoutDate, newCheckout);
    };

    const handleConfirm = async () => {
        const [newCheckoutDate, newCheckout] = createNewCheckoutAndDate();
        console.log(newCheckoutDate, newCheckout);
        const dateIsFree = await checkIfDateIsFree(newCheckoutDate);
        console.log(dateIsFree);
        if (!dateIsFree) {
            showAlert();
            return;
        }

        await openNewCheckout(newCheckoutDate, newCheckout);
        handleClose();
        navigation.navigate("Management");
    };

    return (
        <>
            <CustomModal onClose={handleClose} animation="fade">
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
                        onPress={onClose}
                    />
                </CustomModal.Actions>
            </CustomModal>

            {isAlertVisible && <UsedDateAlert onClose={closeAlert} />}
        </>
    );
}

export default NewCheckoutModal;
