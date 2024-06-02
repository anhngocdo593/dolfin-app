import React, { useState, useEffect } from "react";
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
import axios from "axios";

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
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [selectedMonth]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://money-manager-ebon.vercel.app/expenses/totalexpense"
      );
      const formattedData = formatDataByMonth(response.data);
      setData(formattedData);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const formatDataByMonth = (data) => {
    const result = {};
    months.forEach((month) => {
      result[month] = data.filter(
        (item) =>
          new Date(item.date).toLocaleString("default", { month: "long" }) ===
          month
      );
    });
    return result;
  };

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

        {loading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : error ? (
          <Text style={styles.errorText}>Error: {error}</Text>
        ) : selectedData.length > 0 ? (
          <>
            <PieChart
              widthAndHeight={150}
              series={chartData}
              sliceColor={chartColors}
              coverRadius={0.45}
              coverFill="#FFF"
              style={{ alignSelf: "center", justifyContent: "center" }}
            />
            <ExpenseList />
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
  loadingText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    marginTop: 20,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default ChartPage;
