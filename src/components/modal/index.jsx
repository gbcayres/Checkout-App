import { Modal, View } from "react-native";

import ModalContent from "./modalContent";
import ModalHeader from "./modalHeader";
import ModalActions from "./modalActions";
import ModalAction from "./modalAction";

import styles from "./styles";
import ModalTitle from "./modalTitle";

function CustomModal({visible, onClose, children, animation}) {
  return (
    <Modal
        visible={visible}
        transparent
        animationType={animation}
        statusBarTranslucent
        onRequestClose={onClose}
    >
        <View style={styles.modalWrapper}>
            <View style={styles.modalContainer}>
                {children}    
            </View>  
        </View>
    </Modal>
  )
}

CustomModal.Header = ModalHeader
CustomModal.Title = ModalTitle;
CustomModal.Content = ModalContent;
CustomModal.Actions = ModalActions;
CustomModal.Action = ModalAction;

export default CustomModal;