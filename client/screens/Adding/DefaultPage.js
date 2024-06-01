import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import CalendarComponent from "../../components/CalendarComponent";
import ExpenseList from "../../components/ExpenseList";
import TvS from "../../components/TvS";
import FooterS from "../../components/FooterS";

const DefaultPage = () => {
  const [selectedDate, setSelectedDate] = useState("2024-05-20");
  const [day, setDay] = useState("1");
  const [month, setMonth] = useState("6");
  const [year, setYear] = useState("2024");
  const [showCalendar, setShowCalendar] = useState(true);
  const [searchBar, setSearchBar] = useState("");

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const expenses = [
    {
      _id: "1",
      category: "transport",
      amount: 300000,
    },
    {
      _id: "2",
      category: "clothing",
      amount: 400000,
    },
    {
      _id: "3",
      category: "food",
      amount: 100000,
    },
    {
      _id: "4",
      category: "utilities",
      amount: 300000,
    },
  ];

  const handleDayPress = (date) => {
    const selectedDate = new Date(date);
    setDay(selectedDate.getUTCDate());
    setMonth(selectedDate.getUTCMonth() + 1);
    setYear(selectedDate.getUTCFullYear());
    setSelectedDate(date);
  };

  const updateSearch = (text) => {
    setSearchBar(text);
    // Handle search functionality here
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
            {showCalendar && (
              <FontAwesome name="arrow-up" size={24} className="ml-10" />
            )}
            {!showCalendar && (
              <FontAwesome name="arrow-down" size={24} className="ml-10" />
            )}
          </TouchableOpacity>
        </Text>
        {showCalendar && (
          <CalendarComponent
            style={{ flex: 1, marginBottom: 20 }}
            onDateChange={handleDayPress}
          />
        )}
        {!showCalendar && (
          <SafeAreaView>
            <TvS day={day} month={month} year={year}></TvS>
            <SearchBar
              containerStyle={{
                backgroundColor: "#F5F5F5",
                borderRadius: 10,
                borderStyle: "dotted",
              }}
              placeholder="Tìm kiếm"
              inputContainerStyle={{
                placeholder: "Search",
                backgroundColor: "#F5F5F5",
                borderRadius: 10,
                borderStyle: "solid",
              }}
              onChangeText={updateSearch} // This is the key part
              value={searchBar}
            />
          </SafeAreaView>
        )}
        <ExpenseList props={expenses} />
      </SafeAreaView>
      <FooterS></FooterS>
    </View>
  );
};

export default DefaultPage;
