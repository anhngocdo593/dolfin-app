import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const ReturnButton = ({ onPress, label = '< Quay lại' }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    button: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
      },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default ReturnButton;