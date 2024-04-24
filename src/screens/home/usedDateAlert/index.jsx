import { Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import CustomModal from "../../../components/modal";

import { theme } from "../../../theme";

function UsedDateAlert({ onClose }) {
    return (
        <CustomModal
            onClose={onClose}
            animation="slide"
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                justifyContent: "flex-end",
            }}
        >
            <CustomModal.Header>
                <CustomModal.Title>Aviso</CustomModal.Title>
                <Ionicons name="warning-outline" size={24} color="black" />
            </CustomModal.Header>
            <CustomModal.Content>
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: theme.fontFamily.medium,
                        textAlign: "center",
                    }}
                >
                    Você já registrou um caixa nessa data.
                </Text>
            </CustomModal.Content>
            <CustomModal.Actions>
                <CustomModal.Action
                    title="Ok"
                    color={theme.colors.yellow}
                    onPress={onClose}
                />
            </CustomModal.Actions>
        </CustomModal>
    );
}

export default UsedDateAlert;
