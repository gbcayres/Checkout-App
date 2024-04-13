import { useState } from "react";
import { Text, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import CustomModal from "../../../components/modal"

import { FontAwesome6 } from "@expo/vector-icons"

import { theme } from "../../../theme";
import styles from "./styles";

function NewCheckoutModal({isVisible, onClose, animation}) {
    const [date, setDate] = useState('');
    const [openBalance, setOpenBalance] = useState('');

    const logData = () => {
        console.log(date, openBalance)
    }

    return (
        <CustomModal 
            visible={isVisible} 
            onClose={onClose}
            animation={animation}
        >
            <CustomModal.Title>Informações de Caixa</CustomModal.Title>
            <CustomModal.Content>
                <View style={styles.section}>
                    <Text style={styles.sectionLabel}>Data do caixa:</Text>
                    <View style={styles.inputContainer}>
                        <FontAwesome6 name="calendar-days" size={22} color={theme.colors.gray_200} />
                        <TextInputMask 
                            style={styles.input}
                            placeholderTextColor={theme.colors.gray_200}
                            type="datetime"
                            value={date}
                            options={{
                                format: "DD/MM/YYYY"
                            }}
                            onChangeText={text => setDate(text)}
                            placeholder="DD/MM/YYYY"
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionLabel}>Caixa Inicial:</Text>
                    <View style={styles.inputContainer}>
                        <FontAwesome6 name="money-bill-1" size={24} color={theme.colors.gray_200} />
                        <TextInputMask
                            placeholderTextColor={theme.colors.gray_200}
                            style={styles.input}
                            type="money"
                            options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$',
                            }}
                            value={openBalance}
                            onChangeText={text => setOpenBalance(text)}
                            placeholder="R$0,00"
                        />
                    </View>
                </View>
            </CustomModal.Content>
            <CustomModal.Actions>
                <CustomModal.Action 
                    title="action1" 
                    color={theme.colors.green}
                    onPress={logData}
                />
                <CustomModal.Action 
                    title="Cancelar" 
                    color={theme.colors.red}
                    onPress={() => {
                        onClose();
                        setDate('');
                        setOpenBalance('');
                    }}
                />
            </CustomModal.Actions>
        </CustomModal>
    )
}

export default NewCheckoutModal;