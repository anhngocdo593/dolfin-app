import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native';
import Item from './Item';
import TextBox from "./TextBox";
import TimeSelectComponent from "./TimeSelect";
import DaySelectComponent from "./DaySelect";
import NumberInput from "./NumberInput";
import CheckBox from "./CheckBox";
const { height } = Dimensions.get('window');

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
const BottomPopup = ({isVisiblePopup, popupHeight, openPopup, closePopup, item, token}) => {
    const date = new Date(item.date)
    const [description, setDescription] = useState(item.description);
    const [amount, setAmount] = useState(item.amount);
    const [category, setCategory] = useState(item.category);
    const [selectedDay, setSelectedDay] = useState(date.getDate());
    const [selectedMonth, setSelectedMonth] = useState(date.getMonth());
    const [selectedYear, setSelectedYear] = useState(date.getFullYear());
    const [selectedHour, setSelectedHour] = useState(date.getHours());
    const [selectedMinute, setSelectedMinute] = useState(date.getMinutes());
    const [isEditing, setIsEditing] = useState(false);
    const handleDayChange = (value) => {
      setSelectedDay(value);
    };
  
    const handleMonthChange = (value) => {
      setSelectedMonth(value);
    };
  
    const handleYearChange = (value) => {
      setSelectedYear(value);
    };
    const closePopupAndEdit = () => {
      setIsEditing(true)
    };

    useEffect (() =>{
      async function putExpenses(url) {
        try{
          console.log(JSON.stringify({
            amount,
            description,
            category,
            date,
            time,
          }))
          date.setDate(selectedDay)
          date.setMonth(selectedMonth)
          date.setFullYear(selectedYear)
          date.setHours(selectedHour)
          date.setMinutes(selectedMinute)
          console.log(date)
          const time = `${selectedHour}:${selectedMinute}`
          console.log(typeof(amount))
          const APIresponse = await fetch(url,{
                method: 'PUT',
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  amount,
                  description,
                  category,
                  date,
                  time,
                }),
          });
          if (!APIresponse.ok) {
            console.log(APIresponse)
            throw new Error('Failed to put data');
          }
          const data = await APIresponse.json();
          console.log(data)
        }
        catch (error) {
        setError(error.message);
        throw new Error(error);
      } 
        // return APIresponse.json();
      };
      if (isEditing){
        console.log(token)
        putExpenses(`https://money-manager-ebon.vercel.app/expenses/${item._id}`)
        setIsEditing(false)
        closePopup()
      }
    }
      )

    return (
        <View style={styles.container}>
          {isVisiblePopup && (
            <Animated.View style={[styles.popup, { height: popupHeight }]}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'baseline'}}>
                <TouchableOpacity onPress={closePopup} style={styles.closeButton}>
                    <Text style={[styles.buttonText,{color:"gray"}]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={closePopupAndEdit} style={styles.closeButton}>
                    <Text style={[styles.buttonText,{color:"blue"}]}>Xác nhận</Text>
                </TouchableOpacity>
                </View>
                <View
                style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom:20,
                }}
            > 
                <View
                  style={{flex: 1, maxWidth: "auto", flexDirection: "row", alignItems: "center",}}
                    >
                  <Image
                    source={categoryImages[item.category] || require("../assets/fish.png")}
                    style={{ width: 50, height: 50, marginRight: 20 }}
                    />
                  <Text
                    style={{color: "black",fontWeight: "bold",textTransform: "capitalize",}}
                    >
                    {item.category}
                  </Text>
                </View>
                <NumberInput value={amount} setValue={setAmount} init={amount.toString()}/>
            </View>
          <View style={styles.contentNote}>
            <TextBox value={description} label={"Ghi chú"} onChangeText={setDescription} />
          </View>
          <View style ={{gap:10,flexGrow:1}}>
            <SafeAreaView style={styles.containerTime}>
            <TimeSelectComponent selectedMinute ={selectedMinute} selectedHour = {selectedHour} setSelectedMinute = {setSelectedMinute} setSelectedHour = {setSelectedHour}/>
            <DaySelectComponent selectedDay={selectedDay} selectedMonth={selectedMonth} selectedYear={selectedYear} 
                                handleDayChange={handleDayChange} handleMonthChange={handleMonthChange} handleYearChange={handleYearChange}/>
            </SafeAreaView>
            <SafeAreaView style={styles.containerDay}>
                <CheckBox label="Bật thông báo" />
            </SafeAreaView>
          </View>
            </Animated.View>
          )}
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        openButton: {
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
        },
        buttonText: {
          fontSize: 16,
        },
        popup: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 5,
        },
        popupText: {
          fontSize: 18,
          textAlign: 'center',
        },
        closeButton: {
          padding: 10,
          borderRadius: 5,
        },
        contentNote: {
          flex: 1,
          alignItems: "left",
          width: "95%",
          alignSelf: "center",
        },
        containerTime: {
          flex: 1,
          alignItems: "left",
          width: "95%",
          alignSelf: "center",
          flexDirection:'row'
        },
        containerDay: {
          flex: 1,
          alignItems: "left",
          width: "95%",
          alignSelf: "center",
        },
        text: {
          fontSize: 24,
          marginBottom: 10,
        },
        notesText: {
          fontSize: 18,
          color: "#333333",
        },
      });

export default BottomPopup;
