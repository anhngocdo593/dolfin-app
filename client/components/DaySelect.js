// DaySelectComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

const DaySelectComponent = ({ selectedDay, selectedMonth, selectedYear, handleDayChange, handleMonthChange, handleYearChange }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Chọn Ngày</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={handleDayChange}
          items={generateDays(selectedMonth + 1, selectedYear)}
          value={selectedDay}
          style={pickerSelectStyles}
          placeholder={{ label: 'Chọn ngày', value: null }}
        />
        <RNPickerSelect
          onValueChange={handleMonthChange}
          items={generateMonths()}
          value={selectedMonth}
          style={pickerSelectStyles}
          placeholder={{ label: 'Chọn tháng', value: null }}
        />
        <RNPickerSelect
          onValueChange={handleYearChange}
          items={generateYears(1900, 2100)}
          value={selectedYear}
          style={pickerSelectStyles}
          placeholder={{ label: 'Chọn năm', value: null }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    color: 'black',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    width: 100,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  inputAndroid: {
    fontSize: 18,
    color: 'black',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    width: 100,
    textAlign: 'center',
    marginHorizontal: 5,
  },
});

export default DaySelectComponent;
