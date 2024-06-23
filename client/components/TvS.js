import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TvS = ({totalExpense, totalIncome, day, month, year}) => {
  return (
    <View
      style={{
        padding: 20,
      }}
      className='border-b mb-5 border-gray-300'
    >
      <View style={styles.rowTvS}>
        <Text style={[styles.columnTvS, {color:'gray'}]} className='text-lg'>Tổng Chi phí</Text>
        <Text style={[styles.columnTvS, {color:'gray'}]} className='text-lg'>Tổng Thu nhập</Text>
        <Text style={[styles.columnTvS, {color:'gray'}]} className='text-lg'>Số dư</Text>
      </View>
      <View style={styles.rowTvS}>
        <Text style={styles.value}>{totalExpense}</Text>
        <Text style={styles.value}>{totalIncome}</Text>
        <Text style={styles.value}>{remain}</Text>
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
