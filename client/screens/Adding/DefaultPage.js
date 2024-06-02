import React, { useState, useRef, useEffect, } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, Animated, Dimensions, Alert } from "react-native";
import CalendarComponent from "../../components/CalendarComponent";
import ExpenseList from "../../components/ExpenseList";
import { FontAwesome } from "@expo/vector-icons";
import TvS from "../../components/TvS";
import FooterS from "../../components/FooterS";
import BottomPopup from "../../components/BottomPopup";
import { useSelector } from 'react-redux';


const DefaultPage = () => {
  const today = new Date()
  const [day, setDay] = useState(today.getDate());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today.toDateString());
  const [showCalendar, setShowCalendar] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const [expensesloading, setExpensesloading] = useState(true);
  const popupHeight = useRef(new Animated.Value(0)).current;
  const { height } = Dimensions.get('window');
  const token = useSelector(state => state.token);
  const [expensesdata, setExpensesdata] = useState(null)
  const [error, setError] = useState(null);
  useEffect (() =>{
  async function getExpenses(url) {
    var list = []
    console.log(`fetching from ${url}`)
    try{
      const APIresponse = await fetch(url,{
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
      });
      if (!APIresponse.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await APIresponse.json();
      console.log('got data')
      data.forEach(element => {
        var item = {_id: element._id, date: element.date, category: element.category, amount: element.amount, description: element.description, time: element.time, userID: element.userID}
        console.log(item)
        list.push(item)
      });
      setExpensesdata(list)
      setExpensesloading(false)
    }
    catch (error) {
    setError(error.message);
    throw new Error(error);
  } 
    // return APIresponse.json();
  };
  if (expensesloading){
    console.log('loading expense')
  getExpenses(`https://money-manager-ebon.vercel.app/expenses?day=${day}&month=${month}&year=${year}`)
  setExpensesloading(false)
  }}
  )

  const handlePressItemEdit = async (item) => {
    setEditItem(item)
    console.log(`Editing ${item.category}`)
    openPopup()
    console.log(`token: ${token}`)
  }
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const openPopup = () => {
    setIsVisiblePopup(true);
    Animated.timing(popupHeight, {
      toValue: height * 0.5, // Adjust the popup height as needed
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
    setExpensesloading(true)
  };
  // const expenses = [
  //   {
  //     _id: "1",
  //     category: "transport",
  //     amount: 300000,
  //   },
  //   {
  //     _id: "2",
  //     category: "clothing",
  //     amount: 400000,
  //   },
  //   {
  //     _id: "3",
  //     category: "food",
  //     amount: 100000,
  //   },
  //   {
  //     _id: "4",
  //     category: "utilities",
  //     amount: 300000,
  //   },
  // ];
  const handleDayPress = (date) => {
    const selectedDate = new Date(date);
    setDay(selectedDate.getUTCDate());
    setMonth(selectedDate.getUTCMonth() + 1);
    setYear(selectedDate.getUTCFullYear());
    setSelectedDate(date);
    setExpensesloading(true);
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
        <ExpenseList expensesdata={expensesdata} handlePressItemEdit={handlePressItemEdit} expensesloading={expensesloading} setExpensesloading={setExpensesloading} day={day} month={month} year={year} />
        {
          isVisiblePopup && <BottomPopup isVisiblePopup={isVisiblePopup} popupHeight={popupHeight} openPopup={openPopup} closePopup={closePopup} item={editItem} token={token}>
        </BottomPopup>
        } 
      </SafeAreaView>
      <FooterS></FooterS>
    </View>
  );
};

export default DefaultPage;
