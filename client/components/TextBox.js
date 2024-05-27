import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const TextBox = ({ value, onChangeText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Ghi chú</Text>
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
                multiline
                placeholder="Thêm ghi chú"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    textInput: {
        height: 50,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        textAlignVertical: 'top', // Ensures the text starts from the top when multiline is true
    },
});

export default TextBox;
