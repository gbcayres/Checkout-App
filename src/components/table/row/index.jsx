import React from "react";
import { DataTable } from "react-native-paper";

import styles from "./styles";

function TableRow({ rowData }) {
    const cellData = rowData.slice(0, 3)
    const transactionStyle = cellData[0] === 'Entrada' ? styles.inTransaction : styles.outTransaction;

  return (
    <DataTable.Row style={transactionStyle}>
      {cellData.map((item, index) => (
        <DataTable.Cell textStyle={styles.transactionText} key={index}>{item}</DataTable.Cell>
      ))}
    </DataTable.Row>
  );
}

export default TableRow;