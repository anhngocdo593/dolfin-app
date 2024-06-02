import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native';
import Item from './Item';
import TextBox from "./TextBox";
import TimeSelectComponent from "./TimeSelect";
import DaySelectComponent from "./DaySelect";
import NumberInput from "./NumberInput";
import CheckBox from "./CheckBox";
const { height } = Dimensions.get('window');

const BottomPopup = ({isVisiblePopup, popupHeight, openPopup, closePopup, item}) => {

    let tempNotes = ''
    const handleNotes = (notes) => {
        tempNotes = notes
    };
  
    return (
        <View style={styles.container}>
          {isVisiblePopup && (
            <Animated.View style={[styles.popup, { height: popupHeight }]}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'baseline'}}>
                <TouchableOpacity onPress={closePopup} style={styles.closeButton}>
                    <Text style={[styles.buttonText,{color:"gray"}]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={closePopup} style={styles.closeButton}>
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
                <Item item={item}/>
            </View>
          <View style={styles.contentNote}>
            <TextBox value={item.notes} label={"Ghi chú"} onChangeText={(newNotes) => handleNotes(newNotes)} />
          </View>
          <View style ={{gap:10,flexGrow:1}}>
            <SafeAreaView style={styles.containerTime}>
                <TimeSelectComponent />
                <DaySelectComponent />
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
