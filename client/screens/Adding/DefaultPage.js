import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import { useSelector } from "react-redux";
import CalendarComponent from "../../components/CalendarComponent";
import ExpenseList from "../../components/ExpenseList";
import TvS from "../../components/TvS";
import FooterS from "../../components/FooterS";
import BottomPopup from "../../components/BottomPopup";

const DefaultPage = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(
    today.toISOString().split("T")[0]
  );
  const [day, setDay] = useState(today.getUTCDate());
  const [month, setMonth] = useState(today.getUTCMonth() + 1);
  const [year, setYear] = useState(today.getUTCFullYear());
  const [showCalendar, setShowCalendar] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const [expensesLoading, setExpensesLoading] = useState(true);
  const [searchBar, setSearchBar] = useState("");
  const popupHeight = useRef(new Animated.Value(0)).current;
  const { height } = Dimensions.get("window");
  const token = useSelector((state) => state.token);

  const expenses = [
    { _id: "1", category: "transport", amount: 300000 },
    { _id: "2", category: "clothing", amount: 400000 },
    { _id: "3", category: "food", amount: 100000 },
    { _id: "4", category: "utilities", amount: 300000 },
  ];

  const handlePressItemEdit = async (item) => {
    setEditItem(item);
    openPopup();
  };

  const handleDayPress = (date) => {
    const selectedDate = new Date(date);
    setDay(selectedDate.getUTCDate());
    setMonth(selectedDate.getUTCMonth() + 1);
    setYear(selectedDate.getUTCFullYear());
    setSelectedDate(date);
    setExpensesLoading(true);
  };

  const updateSearch = (text) => {
    setSearchBar(text);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
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
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {day}-{month}-{year}
          <TouchableOpacity onPress={toggleCalendar}>
            {showCalendar ? (
              <FontAwesome
                name="arrow-up"
                size={24}
                style={{ marginLeft: 10 }}
              />
            ) : (
              <FontAwesome
                name="arrow-down"
                size={24}
                style={{ marginLeft: 10 }}
              />
            )}
          </TouchableOpacity>
        </Text>
        {showCalendar && (
          <CalendarComponent
            style={{ flex: 1, marginBottom: 20 }}
            onDateChange={handleDayPress}
          />
        )}
        {!showCalendar && <TvS day={day} month={month} year={year} />}
        <SearchBar
          containerStyle={{
            backgroundColor: "#F5F5F5",
            borderRadius: 10,
            borderStyle: "dotted",
          }}
          placeholder="Tìm kiếm"
          inputContainerStyle={{
            backgroundColor: "#F5F5F5",
            borderRadius: 10,
            borderStyle: "solid",
          }}
          onChangeText={updateSearch}
          value={searchBar}
        />
        <ExpenseList
          handlePressItemEdit={handlePressItemEdit}
          expensesLoading={expensesLoading}
          setExpensesLoading={setExpensesLoading}
          day={day}
          month={month}
          year={year}
        />
        <BottomPopup
          isVisiblePopup={isVisiblePopup}
          popupHeight={popupHeight}
          openPopup={openPopup}
          closePopup={closePopup}
          item={editItem}
        />
      </SafeAreaView>
      <FooterS />
    </View>
  );
};

export default DefaultPage;
