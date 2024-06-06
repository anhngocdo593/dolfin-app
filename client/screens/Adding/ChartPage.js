import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FooterS from "../../components/FooterS";
import PieChart from "react-native-pie-chart";
import ExpenseList from "../../components/ExpenseList";
import { Entypo } from "@expo/vector-icons";
import { fetchExpenses } from "../../expensesSlice";

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

const categoryColors = {
  food: "#FF6347", // Tomato
  transport: "#4682B4", // SteelBlue
  edu: "#32CD32", // LimeGreen
  clothes: "#FFD700", // Gold
  beauty: "#FF69B4", // HotPink
  entertaining: "#8A2BE2", // BlueViolet
  event: "#FF4500", // OrangeRed
};

const ChartPage = () => {
  const handlePressItemEdit = (item) => {
    Alert.alert("Description ", item.description);
  };
  const [selectedMonth, setSelectedMonth] = useState("June");
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.data[selectedMonth]);
  const status = useSelector((state) => state.expenses.status);
  const error = useSelector((state) => state.expenses.error);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    const monthIndex = months.indexOf(selectedMonth) + 1;
    const year = parseInt(selectedYear, 10);
    if (!isNaN(year) && token) {
      dispatch(fetchExpenses({ month: monthIndex, year, token }));
    }
  }, [selectedMonth, selectedYear, dispatch, token]);

  const chartData = expenses ? expenses.map((item) => item.percentage) : [];
  const chartColors = expenses
    ? expenses.map((item) => categoryColors[item.category] || "#000000")
    : [];
  const totalPercentage = chartData.reduce((sum, value) => sum + value, 0);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleYearSubmit = () => {
    const year = parseInt(selectedYear, 10);
    if (!isNaN(year) && token) {
      dispatch(
        fetchExpenses({ month: months.indexOf(selectedMonth) + 1, year, token })
      );
      Keyboard.dismiss();
    } else {
      alert("Please enter a valid year.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.header} onPress={toggleModal}>
            <Text style={styles.headerText}>
              {selectedMonth}{" "}
              <Entypo name="chevron-down" size={24} color="black" />
            </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.yearInput}
            placeholder="Enter year"
            keyboardType="numeric"
            value={selectedYear}
            onChangeText={setSelectedYear}
            onSubmitEditing={handleYearSubmit}
            returnKeyType="done"
          />
        </View>

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

        {status === "loading" ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : error ? (
          <Text style={styles.errorText}>Error: {error}</Text>
        ) : expenses ? (
          <>
            {totalPercentage > 0 ? (
              <PieChart
                widthAndHeight={200}
                series={chartData}
                sliceColor={chartColors}
                coverRadius={0.45}
                coverFill="#FFF"
                style={{ alignSelf: "center", justifyContent: "center" }}
              />
            ) : (
              <Text style={styles.noDataText}>
                No data available for {selectedMonth} {selectedYear}
              </Text>
            )}
            <Text
              style={{
                alignSelf: "center",
                fontSize: 25,
                fontWeight: "bold",
                marginTop: 20,
              }}
            >
              {" "}
              Expenses List
            </Text>
            <ExpenseList
              expensesdata={expenses}
              handlePressItemEdit={handlePressItemEdit}
            />
          </>
        ) : (
          <Text style={styles.noDataText}>
            No data available for {selectedMonth}
          </Text>
        )}
      </SafeAreaView>
      <FooterS selectedPage="ChartPage" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    margin: 15,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  yearInput: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    padding: 5,
    fontSize: 18,
    color: "black",
    marginBottom: 16,
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
