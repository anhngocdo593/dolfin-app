import React, { useState } from "react";
import {  View, Text,  Image} from "react-native";

const categoryImages = {
    'food': require("../assets/food.png"),
    'transport': require("../assets/transport.png"),
    // Thêm các ánh xạ khác tương ứng với các category khác
  };
const Item = ({ item}) => {
    return (
        <View 
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}>
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
            <Text style={{ color: "black", fontWeight: "bold" }}>
              {item.amount}
            </Text>
        </View>
    )
};

export default Item;
