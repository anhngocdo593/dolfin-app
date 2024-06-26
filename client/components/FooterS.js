import React from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FooterS = ({ selectedPage }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        display: "flex",
        width: "100%",
        height: "10%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        borderTopColor: "gray",
        borderRadius: 90,
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("DefaultPage")}
      >
        <FontAwesome
          name="home"
          size={24}
          color={selectedPage === "DefaultPage" ? "blue" : "gray"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("NotificationScreen")}
      >
        <FontAwesome
          name="bell"
          size={24}
          color={selectedPage === "NotificationScreen" ? "blue" : "gray"}
        />
      </TouchableOpacity>
      <View style={{}}>
        <TouchableOpacity
          style={{
            top: -30,
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#7DB6DF",
            borderRadius: 90,
          }}
          onPress={() => navigation.navigate("AddScreen")}
        >
          <FontAwesome5 name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("ChartPage")}
      >
        <FontAwesome
          name="pie-chart"
          size={24}
          color={selectedPage === "ChartPage" ? "blue" : "gray"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("AccountSetting")}
      >
        <FontAwesome
          name="user"
          size={24}
          color={selectedPage === "AccountSetting" ? "blue" : "gray"}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FooterS;
