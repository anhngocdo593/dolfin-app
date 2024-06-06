import React, { useState, useRef, useEffect, useCallback } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarComponent from "../../components/CalendarComponent";
import ExpenseList from "../../components/ExpenseList";
import { FontAwesome } from "@expo/vector-icons";
import TvS from "../../components/TvS";
import FooterS from "../../components/FooterS";
import BottomPopup from "../../components/BottomPopup";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../userSlice";

const DefaultPage = () => {
  const dispatch = useDispatch();
  const [submenus, setSubmenus] = useState("Chi");
  const today = new Date();
  const [day, setDay] = useState(today.getDate());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today.toDateString());
  const [showCalendar, setShowCalendar] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const [expensesLoading, setExpensesLoading] = useState(true);
  const popupHeight = useRef(new Animated.Value(0)).current;
  const { height } = Dimensions.get("window");
  const token = useSelector((state) => state.token);
  const [expensesData, setExpensesData] = useState(null);
  const [incomesData, setIncomesData] = useState(null);
  const [error, setError] = useState(null);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const isFocused = useIsFocused();
  const user = useSelector((state) => state.user.data);
  const userStatus = useSelector((state) => state.user.status);
  const userError = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused, day, month, year]);

  const fetchData = useCallback(async () => {
    setExpensesLoading(true);
    try {
      const [expenses, incomes] = await Promise.all([
        getExpenses(
          `https://money-manager-ebon.vercel.app/expenses?day=${day}&month=${month}&year=${year}`
        ),
        getIncomes(
          `https://money-manager-ebon.vercel.app/incomes?day=${day}&month=${month}&year=${year}`
        ),
      ]);
      setExpensesData(expenses.list);
      setIncomesData(incomes.list);
      setTotalExpense(expenses.total);
      setTotalIncome(incomes.total);
    } catch (error) {
      setError(error.message);
    } finally {
      setExpensesLoading(false);
    }
  }, [day, month, year, token]);

  const getExpenses = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch expenses");
    }
    const data = await response.json();
    const list = data.map((element) => ({
      _id: element._id,
      date: element.date,
      category: element.category,
      amount: element.amount,
      description: element.description,
      time: element.time,
      userID: element.userID,
    }));
    const total = list.reduce((sum, item) => sum + item.amount, 0);
    return { list, total };
  };

  const getIncomes = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch incomes");
    }
    const data = await response.json();
    const list = data.map((element) => ({
      _id: element._id,
      date: element.date,
      category: element.category,
      amount: element.amount,
      description: element.description,
      time: element.time,
      userID: element.userID,
    }));
    const total = list.reduce((sum, item) => sum + item.amount, 0);
    return { list, total };
  };

  const handlePressItemEdit = (item) => {
    setEditItem(item);
    openPopup();
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleChiPress = () => {
    setSubmenus("Chi");
  };

  const handleThuPress = () => {
    setSubmenus("Thu");
  };

  const openPopup = () => {
    setIsVisiblePopup(true);
    Animated.timing(popupHeight, {
      toValue: height * 0.5,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closePopup = () => {
    Animated.timing(popupHeight, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setIsVisiblePopup(false));
    fetchData();
  };

  const handleDayPress = (date) => {
    const selectedDate = new Date(date);
    setDay(selectedDate.getUTCDate());
    setMonth(selectedDate.getUTCMonth() + 1);
    setYear(selectedDate.getUTCFullYear());
    setSelectedDate(date);
    setExpensesLoading(true);
  };

  const finalIncome = totalIncome + (parseInt(user.income) || 0);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.header}>
          {day}/{month}/{year}
          <TouchableOpacity onPress={toggleCalendar}>
            <FontAwesome
              name={showCalendar ? "arrow-up" : "arrow-down"}
              size={24}
              style={styles.icon}
            />
          </TouchableOpacity>
        </Text>
        {showCalendar && (
          <CalendarComponent
            style={{ flex: 1, marginBottom: 20 }}
            onDateChange={handleDayPress}
          />
        )}
        {!showCalendar && (
          <TvS
            totalExpense={totalExpense}
            totalIncome={finalIncome}
            day={day}
            month={month}
            year={year}
          />
        )}

        <View style={styles.containerSubmenu}>
          <TouchableOpacity
            onPress={handleChiPress}
            style={[styles.button, submenus === "Chi" && styles.selectedButton]}
          >
            <Text style={styles.buttonText}>Chi tiêu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleThuPress}
            style={[styles.button, submenus === "Thu" && styles.selectedButton]}
          >
            <Text style={styles.buttonText}>Thu nhập</Text>
          </TouchableOpacity>
        </View>

        {expensesLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ExpenseList
            expensesdata={submenus === "Chi" ? expensesData : incomesData}
            handlePressItemEdit={handlePressItemEdit}
            expensesLoading={expensesLoading}
            setExpensesLoading={setExpensesLoading}
            day={day}
            month={month}
            year={year}
          />
        )}

        {isVisiblePopup && (
          <BottomPopup
            isVisiblePopup={isVisiblePopup}
            popupHeight={popupHeight}
            openPopup={openPopup}
            closePopup={closePopup}
            item={editItem}
            token={token}
            type={submenus === "Chi" ? "expenses" : "incomes"}
          />
        )}
      </SafeAreaView>
      <FooterS selectedPage="DefaultPage" />
    </View>
  );
};

export default DefaultPage;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
  containerSubmenu: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 10,
    paddingBottom: 10,
  },
  selectedButton: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  buttonText: {
    fontSize: 24,
  },
});
