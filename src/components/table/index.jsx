import { ScrollView, Text, View } from "react-native";
import { Table as RawTable } from "react-native-table-component";

import TableRow from "./row";
import TableHeader from "./header";

import styles from "./styles";

function Table({tableTitle, headerData, tableData}) {
  return (
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>{tableTitle}</Text>
        <RawTable style={styles.table}>
          <TableHeader headerData={headerData}/>
          <ScrollView>
            {tableData.map((rowData, index) => (
              <TableRow
                rowData={rowData}
                key={index}
              />
            ))}
          </ScrollView>
        </RawTable>
      </View>
  )
}

export default Table;