import { useState } from "react";

import CustomModal from "../../../components/modal";
import CustomInput from "../../../components/ui/customInput";

import { theme } from "../../../theme";

import { FontAwesome6 } from "@expo/vector-icons";

import { useCheckoutContext } from "../../../contexts/CheckoutContext";
import { saveCheckout, dateIsFree } from "../../../utils/dataHandler";

function NewCheckoutModal({ setIsVisible, navigation }) {
    const { setCurrentCheckout, setCurrentCheckoutDate } = useCheckoutContext();

    const [newCheckoutForm, setNewCheckoutForm] = useState({
        date: "",
        openBalance: "",
    });

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

    const updateCheckoutContext = (newCheckout) => {
        setCurrentCheckoutDate(newCheckoutForm.date);
        setCurrentCheckout(newCheckout);
    };

    const saveNewCheckout = async (newCheckout) => {
        const newCheckoutDate = newCheckoutForm.date;
        if (dateIsFree(newCheckoutDate)) {
            await saveCheckout(newCheckoutDate, newCheckout);
            updateCheckoutContext(newCheckout);
        }
        console.log("you already saved a checkout at this day");
    };

    const openNewCheckout = async () => {
        const newCheckout = createNewCheckout();
        saveNewCheckout(newCheckout);
    };

    const handleConfirm = async () => {
        await openNewCheckout();
        closeModal();
        navigation.navigate("Management");
    };

    return (
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
                    placeholder="teste"
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
    );
}

export default NewCheckoutModal;
