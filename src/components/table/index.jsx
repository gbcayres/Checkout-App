import { ScrollView } from "react-native";
import { Table as RawTable } from "react-native-table-component";

import TableRow from "./row";
import TableHeader from "./header";

import styles from "./styles";

function Table({headerData, tableData}) {
  return (
      <RawTable style={styles.historyContainer}>
        <TableHeader headerData={headerData}/>
        <ScrollView style={styles.scrollWrapper}>
          {tableData.map((rowData, index) => (
            <TableRow
              rowData={rowData}
              key={index}
            />
          ))}
        </ScrollView>
      </RawTable>
  )
}

export default Table;