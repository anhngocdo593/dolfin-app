// components/NumberInput.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const NumberInput = ({value, setValue}) => {

  const handleChange = (text) => {
    // Validate that the input is a number
    if (!isNaN(text) || text === '') {
      setValue(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChange}
        placeholder={value.toString()}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    paddingLeft: 8,
    fontSize: 16,
  },
});

export default NumberInput;
