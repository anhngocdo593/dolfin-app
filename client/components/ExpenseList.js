import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const icons = {
  food: require("../assets/food.png"),
  transport: require("../assets/transport.png"),
};

const ExpenseList = ({ data }) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Image source={icons[item.category]} style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    elevation: 5,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  category: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 14,
    color: "#888",
  },
});

export default ExpenseList;
