// TimeSelectComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const hours = Array.from({ length: 24 }, (_, i) => ({ label: i.toString().padStart(2, '0'), value: i }));
const minutes = Array.from({ length: 60 }, (_, i) => ({ label: i.toString().padStart(2, '0'), value: i }));

const TimeSelectComponent = ({ selectedMinute, selectedHour, setSelectedHour, setSelectedMinute }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Chọn Thời Gian</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => setSelectedHour(value)}
          items={hours}
          value={selectedHour}
          placeholder={{ label: 'Chọn giờ', value: null }}
        />
        <Text style={styles.separator}>:</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => setSelectedMinute(value)}
          items={minutes}
          value={selectedMinute}
          placeholder={{ label: 'Chọn phút', value: null }}
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
  separator: {
    fontSize: 20,
    marginHorizontal: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
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
  },
});

export default TimeSelectComponent;
