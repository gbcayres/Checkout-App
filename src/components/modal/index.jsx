import { Modal, View } from "react-native";

import ModalTitle from "./modalTitle";
import ModalContent from "./modalContent";
import ModalHeader from "./modalHeader";
import ModalActions from "./modalActions";
import ModalAction from "./modalAction";

import styles from "./styles";

function CustomModal({ onClose, children, animation, style }) {
    return (
        <Modal
            transparent
            animationType={animation}
            statusBarTranslucent
            onRequestClose={onClose}
        >
            <View style={[styles.modalWrapper, style]}>
                <View style={styles.modalContainer}>{children}</View>
            </View>
        </Modal>
    );
}

CustomModal.Header = ModalHeader;
CustomModal.Title = ModalTitle;
CustomModal.Content = ModalContent;
CustomModal.Actions = ModalActions;
CustomModal.Action = ModalAction;

export default CustomModal;
