import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReturnButton from '../../components/ReturnButton';
import TextBox from '../../components/TextBox';
import TimeSelectComponent from '../../components/TimeSelect';
import DaySelectComponent from '../../components/DaySelect';
export default function AddScreen()
{
    const [notes, setNotes] = useState('');
    const navigation = useNavigation();
    const handlePress = () => 
    {
        navigation.navigate('Home');
    }
    return(
        <ImageBackground style = {styles.imageBackground} source={require('../../assets/bg.png')}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentall}>
            <View style={styles.contentReturn}>
                <ReturnButton onPress={handlePress}/>
            </View>
            <View style={styles.contentNote}>
                <TextBox value={notes} onChangeText={setNotes} />
            </View>
            <SafeAreaView style={styles.containerTime}>
                <TimeSelectComponent />
            </SafeAreaView>
            <SafeAreaView style={styles.containerDay}>
                <DaySelectComponent />
            </SafeAreaView>

        </View>
        </ScrollView>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        height: 'auto'
    },

    scrollViewContent: {
        flexGrow: 1,
    },
    contentall: {
        flex: 1,
        flexBasis:'auto'
    },
    contentReturn: {
        flex: 1,
        alignItems: 'left',
        marginBottom: 10,
        width: '100%',
        height: '90%',
    },
    contentNote: {
        flex: 1,
        alignItems: 'left',
        width: '90%',
        alignSelf: 'center',
    },
    containerTime: {
        flex: 1,
        alignItems: 'left',
        width: '90%',
        alignSelf: 'center',
      },
    containerDay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
    text: {
        fontSize: 24,
        marginBottom: 10,
    },
    notesText: {
        fontSize: 18,
        color: '#333333',
    },
});