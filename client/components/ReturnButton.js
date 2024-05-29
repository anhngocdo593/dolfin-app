import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text ,Image} from 'react-native';

const ReturnButton = ({ onPress, label = '<' }) => {
    return (
            <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image style = {styles.image} source={require('../assets/ReturnButton.png')}/>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
      },
    button: {
        padding: 10,
        borderRadius: 10,
      },
    image: {
        width:25,
        height:25,
    },
});

export default ReturnButton;