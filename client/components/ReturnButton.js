import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const ReturnButton = ({ onPress, label = '<' }) => {
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
        flex: 1,
        width:'100%',
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
      },
    button: {
    position: 'absolute',
        top: 10,
        left: 10,
        padding: 10,
        borderRadius: 10,
      },
    buttonText: {
        color: '#333333',
        fontSize: 16,
    },
});

export default ReturnButton;