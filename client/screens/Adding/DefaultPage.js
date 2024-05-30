import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import CalendarComponent from "../../components/CalendarComponent";
import ExpenseList from "../../components/ExpenseList";
import { FontAwesome } from "@expo/vector-icons";
import TvS from "../../components/TvS";
import FooterS from "../../components/FooterS";
const DefaultPage = () => {
  const [selectedDate, setSelectedDate] = useState("2024-05-20");
  const [day, setDay] = useState("1");
  const [month, setMonth] = useState("6");
  const [year, setYear] = useState("2024");
  const [showCalendar, setShowCalendar] = useState(true);
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
    console.log(day, "  ", month, "    ", year);
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
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {day}/{month}/{year}
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
        {!showCalendar && <TvS day={day} month={month} year={year}></TvS>}
        <ExpenseList props={expenses} />
      </SafeAreaView>
      <FooterS></FooterS>
    </View>
  );
};

export default DefaultPage;
