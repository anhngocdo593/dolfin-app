// DaySelectComponent.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DaySelectComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatDate = (date) => {
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    return `${dayOfWeek}, ${dayOfMonth} ${month}`;
  };

  const handleDateChange = (event, date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleDateTextPress = () => {
    setShowDatePicker(true);
  };

  const handleDonePress = () => {
    setShowDatePicker(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Date:</Text>
      <Text style={styles.dateText} onPress={handleDateTextPress}>{formatDate(selectedDate)}</Text>
      {showDatePicker && (
        <View>
          {Platform.OS === 'ios' && (
            <View style={styles.doneButtonContainer}>
              <Text style={styles.doneButton} onPress={handleDonePress}>Done</Text>
            </View>
          )}
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleDateChange}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 24,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 20,
    marginTop: 10,
  },
  doneButtonContainer: {
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingBottom: 10,
  },
  doneButton: {
    fontSize: 18,
    color: '#007AFF',
  },
});

export default DaySelectComponent;
