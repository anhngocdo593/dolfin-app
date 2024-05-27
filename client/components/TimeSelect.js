// TimeSelectComponent.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const hours = Array.from({ length: 24 }, (_, i) => ({ label: i.toString().padStart(2, '0'), value: i }));
const minutes = Array.from({ length: 60 }, (_, i) => ({ label: i.toString().padStart(2, '0'), value: i }));

const TimeSelectComponent = () => {
  const [selectedHour, setSelectedHour] = useState(12);
  const [selectedMinute, setSelectedMinute] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Time:</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => setSelectedHour(value)}
          items={hours}
          value={selectedHour}
          placeholder={{}}
        />
        <Text style={styles.separator}>:</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => setSelectedMinute(value)}
          items={minutes}
          value={selectedMinute}
          placeholder={{}}
        />
      </View>
      <Text style={styles.selectedTime}>
        Selected Time: {selectedHour.toString().padStart(2, '0')}:{selectedMinute.toString().padStart(2, '0')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 24,
    marginBottom: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  selectedTime: {
    marginTop: 20,
    fontSize: 24,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 24,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 24,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default TimeSelectComponent;
