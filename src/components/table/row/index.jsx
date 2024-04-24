import React from "react";
import { DataTable } from "react-native-paper";

import styles from "./styles";

function TableRow({ rowData }) {
    const rowItens = Object.values(rowData);

    const transactionStyle =
        rowItens[0] === "Entrada"
            ? styles.inTransaction
            : styles.outTransaction;

    return (
        <DataTable.Row style={transactionStyle}>
            {rowItens.map((item, index) => (
                <DataTable.Cell textStyle={styles.transactionText} key={index}>
                    {item}
                </DataTable.Cell>
            ))}
        </DataTable.Row>
    );
}

export default TableRow;
