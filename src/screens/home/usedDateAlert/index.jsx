import { Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import CustomModal from "../../../components/modal";

import { theme } from "../../../theme";

function UsedDataAlert({ setVisible }) {
    const closeAlert = () => {
        setVisible(false);
    };

    return (
        <CustomModal
            onClose={closeAlert}
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
                    You already have a checkout saved on this date.
                </Text>
            </CustomModal.Content>
            <CustomModal.Actions>
                <CustomModal.Action
                    title="Ok"
                    color={theme.colors.yellow}
                    onPress={closeAlert}
                />
            </CustomModal.Actions>
        </CustomModal>
    );
}

export default UsedDataAlert;
