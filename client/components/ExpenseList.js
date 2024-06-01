import React from "react";
import { SafeAreaView, View, Text, FlatList, Image } from "react-native";

const categoryImages = {
  food: require("../assets/food.png"),
  transport: require("../assets/transport.png"),
  edu: require("../assets/edu.png"),
  entertaining: require("../assets/entertaining.png"),
  event: require("../assets/event.png"),
  clothes: require("../assets/clothes.png"),
};

const ExpenseList = ({ props }) => {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column", marginTop: 10 }}>
      <Text
        style={{
          alignSelf: "center",
          justifyContent: "center",
          color: "black",
          fontWeight: "bold",
          marginBottom: 15,
          fontSize: 20,
        }}
      >
        Expenses List
      </Text>
      <FlatList
        style={{ flex: 1 }}
        data={props}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <SafeAreaView
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
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
              {item.percentage}%
            </Text>
            <Text style={{ color: "black", fontWeight: "bold" }}>
              {item.amount}
            </Text>
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
  );
};

export default ExpenseList;
