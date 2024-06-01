import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { useSelector } from 'react-redux';


const categoryImages = {
  'food': require("../assets/food.png"),
  'transport': require("../assets/transport.png"),
  "edu": require("../assets/edu.png"),
  "clothes": require("../assets/clothes.png"),
  "beauty": require("../assets/beauty.png"),
  "entertaining": require("../assets/entertaining.png"),
  "event": require("../assets/event.png"),
  // Thêm các ánh xạ khác tương ứng với các category khác
};

const ExpenseList = ({ handlePressItemEdit, popup, day, month, year }) => {
  const token = useSelector(state => state.token);
  const [expensesloading, setExpensesloading] = useState(true);
  const [expensesdata, setExpensesdata] = useState(null)
  const [error, setError] = useState(null);
  useEffect (() =>{
  async function getExpenses(url) {
    var list = []

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
      console.log(data)
      data.forEach(element => {
        console.log(element)
        // var item ={value: element.id, label: element.name}
        // list.push(item)
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
  getExpenses(`https://money-manager-ebon.vercel.app/expenses?day=${day}&month=${month}&year=${year}`)
  }}
  )
  // try {
  //   console.log(token)
  //   const response = fetch(`https://money-manager-ebon.vercel.app/expenses?day=${day}&month=${month}&year=${year}`,{
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     },
  //   });
  //   console.log(token)
  //   const data = response.json();
  //   console.log(data)
  // } catch(error){
  //   Alert.alert('Failed GET expenses', 'Something went wrong');
  // }
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column", marginTop: 10 }}>
      <Text
        style={{
          alignSelf: "center",
          justifyContent: "center",
          color: "black",
          fontWeight: "bold",
          marginBottom: 15,
          fontSize: 20,
        }}
      >
        Expenses List
      </Text>
      <FlatList
        style={{ flex: 1 }}
        data={expensesdata}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
            onPress={() => handlePressItemEdit(item)}
          >
            <View
              style={{
                flex: 1,
                maxWidth: "auto",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={
                  categoryImages[item.category] || require("../assets/fish.png")
                }
                style={{ width: 50, height: 50, marginRight: 20 }}
              />
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {item.category}
              </Text>
            </View>
            <Text style={{ flex: 1, color: "black", fontWeight: "bold" }}>
              {item.percent}50%
            </Text>
            <Text style={{ color: "black", fontWeight: "bold" }}>
              {item.amount}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ExpenseList;
