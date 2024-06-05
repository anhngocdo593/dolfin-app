import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  ImageBackground,
} from "react-native";
import FooterS from "../../components/FooterS";

const notifications = [
  {
    id: "1",
    type: "info",
    message: "Chúc mừng Bạn vừa nhận được 158 coins từ tiền gửi thanh toán",
  },
  {
    id: "2",
    type: "alert",
    message:
      "Theo QD 2345 của Ngân hàng Nhà nước, từ ngày 01/7/2024, Khách hàng cần xác thực sinh trắc học bằng khuôn mặt đã được so khớp dữ liệu trên...",
  },
  // Add more mock notifications here
];

const NotificationScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotifications = notifications.filter((notification) =>
    notification.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ImageBackground
      source={require("../../assets/dolphin.jpg")}
      style={styles.backgroundImage}
    >
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 30,
              fontWeight: "bold",
              color: "rgba(220, 38, 38, 1)",
            }}
          >
            Thông báo
          </Text>
          <TextInput
            style={styles.searchBar}
            placeholder="Tìm kiếm"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <FlatList
            data={filteredNotifications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.notificationItem}>
                <Text style={styles.notificationIcon}>
                  {item.type === "info" ? "ℹ️" : "⚠️"}
                </Text>
                <View style={styles.notificationTextContainer}>
                  <Text style={styles.notificationText}>{item.message}</Text>
                </View>
              </View>
            )}
          />
        </SafeAreaView>
        <FooterS />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Adding some background color with opacity to make text readable
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
  },
  notificationItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  notificationIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
  },
});

export default NotificationScreen;
