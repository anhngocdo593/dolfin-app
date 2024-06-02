// TimeSelectComponent.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const hours = Array.from({ length: 24 }, (_, i) => ({ label: i.toString().padStart(2, '0'), value: i }));
const minutes = Array.from({ length: 60 }, (_, i) => ({ label: i.toString().padStart(2, '0'), value: i }));

const TimeSelectComponent = (min = 0, hour = 12) => {
  const [selectedHour, setSelectedHour] = useState(hour);
  const [selectedMinute, setSelectedMinute] = useState(min);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Thời gian</Text>
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
      {/* <Text style={styles.selectedTime}>
        Selected Time: {selectedHour.toString().padStart(2, '0')}:{selectedMinute.toString().padStart(2, '0')}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 5,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  separator: {
    fontSize: 16,
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  selectedTime: {
    marginTop: 20,
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  inputAndroid: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});

export default TimeSelectComponent;
