import { Row } from "react-native-table-component";

import styles from "./styles";

function TableHeader({headerData}) {
  return (
    <Row 
        data={headerData} 
        style={styles.historyHeader} 
        textStyle={styles.headerLabel}
    />
  )
}

export default TableHeader;