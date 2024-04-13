import { Row } from "react-native-table-component";

import styles from "./styles";

function TableHeader({headerData}) {
  return (
    <Row 
        data={headerData} 
        textStyle={styles.headerLabel}
        style={styles.historyHeader} 
    />
  )
}

export default TableHeader;