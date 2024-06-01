import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
} from "react-native";
import FooterS from "../../components/FooterS";
import PieChart from "react-native-pie-chart";
import ExpenseList from "../../components/ExpenseList"; // Ensure this is correctly imported
import { Entypo } from "@expo/vector-icons"; // Make sure to install and link this if using Expo

const data = {
  January: [
    { category: "edu", percentage: 50, amount: 100000, color: "#4CAF50" },
    { category: "food", percentage: 30, amount: 100000, color: "#F44336" },
    { category: "transport", percentage: 30, amount: 100000, color: "#FFC107" },
    { category: "event", percentage: 30, amount: 100000, color: "#2196F3" },
  ],
  February: [
    { category: "edu", percentage: 40, amount: 80000, color: "#4CAF50" },
    { category: "food", percentage: 20, amount: 60000, color: "#F44336" },
    { category: "transport", percentage: 30, amount: 70000, color: "#FFC107" },
    { category: "event", percentage: 10, amount: 40000, color: "#2196F3" },
  ],
  // Add more months as needed
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ChartPage = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [modalVisible, setModalVisible] = useState(false);
  const selectedData = data[selectedMonth] || [];
  const chartData = selectedData.map((item) => item.percentage);
  const chartColors = selectedData.map((item) => item.color);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.header} onPress={toggleModal}>
          <Text style={styles.headerText}>
            {selectedMonth}{" "}
            <Entypo name="chevron-down" size={24} color="black" />
          </Text>
        </TouchableOpacity>

        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={toggleModal}
        >
          <TouchableOpacity style={styles.modalOverlay} onPress={toggleModal}>
            <View style={styles.modalContent}>
              {months.map((month) => (
                <TouchableOpacity
                  key={month}
                  style={styles.monthButton}
                  onPress={() => {
                    setSelectedMonth(month);
                    toggleModal();
                  }}
                >
                  <Text style={styles.monthText}>{month}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>

        {selectedData.length > 0 ? (
          <>
            <PieChart
              widthAndHeight={150}
              series={chartData}
              sliceColor={chartColors}
              coverRadius={0.45}
              coverFill="#FFF"
              style={{ alignSelf: "center", justifyContent: "center" }}
            />
            <ExpenseList props={selectedData} />
          </>
        ) : (
          <Text style={styles.noDataText}>
            No data available for {selectedMonth}
          </Text>
        )}
      </SafeAreaView>
      <FooterS />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  monthButton: {
    paddingVertical: 10,
  },
  monthText: {
    fontSize: 18,
    color: "black",
  },
  noDataText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    marginTop: 20,
  },
});

export default ChartPage;
