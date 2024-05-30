import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TvS = (day, month, year) => {
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <View style={styles.rowTvS}>
        <Text style={styles.columnTvS}>Chi phí</Text>
        <Text style={styles.columnTvS}>Thu nhập</Text>
        <Text style={styles.columnTvS}>Số dư</Text>
      </View>
      <View style={styles.rowTvS}>
        <Text style={styles.value}>2000000</Text>
        <Text style={styles.value}>10000000</Text>
        <Text style={styles.value}>8000000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  rowTvS: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  columnTvS: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  value: {
    flex: 1,
    textAlign: "center",
  },
});

export default TvS;
