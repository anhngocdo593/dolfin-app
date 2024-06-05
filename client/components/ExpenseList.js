import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";

const categoryImages = {
  food: require("../assets/food.png"),
  transport: require("../assets/transport.png"),
  edu: require("../assets/edu.png"),
  clothes: require("../assets/clothes.png"),
  beauty: require("../assets/beauty.png"),
  entertaining: require("../assets/entertaining.png"),
  event: require("../assets/event.png"),
};

const ExpenseList = ({
  expensesdata,
  handlePressItemEdit,
  expensesloading,
  setExpensesloading,
  day,
  month,
  year,
}) => {
  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: "column", margin: 10, padding: 10 }}
    >
      <FlatList
        style={{ flex: 1 }}
        data={expensesdata}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 8,
            }}
            onPress={() => handlePressItemEdit(item)}
          >
            <View
              style={{
                flex: 1,
                maxWidth: "auto",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={
                  categoryImages[item.category] || require("../assets/fish.png")
                }
                style={{ width: 50, height: 50, marginRight: 20 }}
              />
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {item.category}
              </Text>
            </View>
            <Text style={{ flex: 1, color: "black", fontWeight: "bold" }}>
              {item.percentage}
              {item.percentage ? "%" : ""}
            </Text>
            <Text style={{ color: "black", fontWeight: "bold" }}>
              {item.amount} VNĐ
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ExpenseList;
