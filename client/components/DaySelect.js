// DaySelectComponent.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const generateDays = (month, year) => {
  const daysInMonth = getDaysInMonth(month, year);
  return Array.from({ length: daysInMonth }, (_, i) => ({
    label: (i + 1).toString(),
    value: i + 1,
  }));
};

const generateMonths = () => {
  return months.map((month, index) => ({
    label: month,
    value: index,
  }));
};

const generateYears = (startYear, endYear) => {
  return Array.from({ length: endYear - startYear + 1 }, (_, i) => ({
    label: (startYear + i).toString(),
    value: startYear + i,
  }));
};

const DaySelectComponent = ({selectedDay,selectedMonth,selectedYear,handleDayChange,handleMonthChange,handleYearChange}) => {

  const formatDate = (day, month, year) => {
    const date = new Date(year, month, day);
    const dayOfWeek = daysOfWeek[date.getDay()];
    return `${dayOfWeek}, ${day} ${months[month]} ${year}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ngày</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={handleDayChange}
          items={generateDays(selectedMonth + 1, selectedYear)}
          value={selectedDay}
          style={pickerSelectStyles}
          placeholder={{}}
        />
        <RNPickerSelect
          onValueChange={handleMonthChange}
          items={generateMonths()}
          value={selectedMonth}
          style={pickerSelectStyles}
          placeholder={{}}
        />
        <RNPickerSelect
          onValueChange={handleYearChange}
          items={generateYears(1900, 2100)}
          value={selectedYear}
          style={pickerSelectStyles}
          placeholder={{}}
        />
      </View>
      {/* <Text style={styles.dateText}>{formatDate(selectedDay, selectedMonth, selectedYear)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
  },
  label: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 5,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 20,
    marginTop: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 5,
    paddingVertical: 5,
    color: 'black',
    paddingRight: 10, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 5,
    paddingVertical: 5,
    color: 'black',
    paddingRight: 10, // to ensure the text is never behind the icon
  },
});

export default DaySelectComponent;
