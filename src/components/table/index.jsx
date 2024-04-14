import { ScrollView, Text, View } from "react-native";
import { DataTable } from "react-native-paper";

import TableHeader from "./header";
import TableRow from "./row";

import styles from "./styles";

function Table({ tableTitle, headerData, tableData }) {
  return (
    <View style={styles.tableContainer}>
      <Text style={styles.tableTitle}>{tableTitle}</Text>
      <DataTable style={styles.table}>
        <TableHeader headerData={headerData} />
        <ScrollView>
          {tableData.map((rowData, index) => (
            <TableRow rowData={rowData} key={index} />
          ))}
        </ScrollView>
      </DataTable>
    </View>
  );
}

export default Table;