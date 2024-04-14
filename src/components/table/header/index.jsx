import { DataTable } from "react-native-paper";

import styles from "./styles";

function TableHeader({ headerData }) {
  return (
    <DataTable.Header style={styles.historyHeader}>
      {headerData.map((item, index) => (
        <DataTable.Title textStyle={styles.headerLabel} key={index}>{item}</DataTable.Title>
      ))}
    </DataTable.Header>
  );
}

export default TableHeader;