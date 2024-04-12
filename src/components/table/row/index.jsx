import { TouchableOpacity } from "react-native";
import { Row } from "react-native-table-component";

import styles from "./styles";
import { theme } from "../../../theme";

function TableRow({ rowData}) {
    function getRowColor() {
        if(rowData[0] === 'Entrada') {
            return {backgroundColor: theme.colors.green};
        }

        return {backgroundColor: theme.colors.red};
    }
    
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log(rowData[3].impressao)}
        >
            <Row
                data={rowData.slice(0, 3)}
                style={[styles.transaction, getRowColor()]}
                textStyle={styles.transactionText}
            />
        </TouchableOpacity>
    )
}

export default TableRow;