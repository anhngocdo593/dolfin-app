import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity, ImageBackground, SafeAreaView, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReturnButton from '../../components/ReturnButton';
import TextBox from '../../components/TextBox';
import TimeSelectComponent from '../../components/TimeSelect';
import DaySelectComponent from '../../components/DaySelect';
export default function AddScreen()
{
    const [notes, setNotes] = useState('');
    const [submenus, setSubmenus] = useState('Chi');
    const [selectedButton, setSelectedButton] = useState(null);
    const [isMenu1Visible, setIsMenu1Visible] = useState(false);
    const [isMenu2Visible, setIsMenu2Visible] = useState(false);
    const button1Ref = useRef(null);
    const button2Ref = useRef(null);
    const images = {
        'Ăn uống': require('../../assets/Ăn uống.png'),
        'Di chuyển': require('../../assets/Di chuyển.png'),
        'Giáo dục': require('../../assets/Giáo dục.png'),
        'Quần áo': require('../../assets/Quần áo.png'),
        // Add all other items similarly
      };
    const menu1Items = ['Ăn uống', 'Di chuyển', 'Giáo dục', 'Quần áo'];
    const menu2Items = ['Option A', 'Option B', 'Option C'];
    const menuItems = submenus === 'Chi' ? menu1Items : menu2Items;
    const navigation = useNavigation();
    const handleReturnPress = () => 
    {
        navigation.navigate('Home');
    }
    const handleChiPress = () => 
    {
        setSubmenus('Chi')
        setIsMenu1Visible(true);
        setIsMenu2Visible(false);
    }
    const handleThuPress = () => 
    {
        setSubmenus('Thu')
        setIsMenu2Visible(true);
        setIsMenu1Visible(false);
    }
    const handleMenuItemPress = (item) => {
      console.log(`Selected: ${item}`);
      setIsMenu1Visible(false);
      setIsMenu2Visible(false);
    };
    return(
        <ImageBackground style = {styles.imageBackground} source={require('../../assets/bg.png')}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentall}>
            <View style={styles.contentReturn}>
                <ReturnButton onPress={handleReturnPress}/>
            </View>
            <View style={styles.contentNote}>
                <TextBox value={notes} label={'Ghi chú'} onChangeText={setNotes} />
            </View>
            <SafeAreaView style={styles.containerTime}>
                <TimeSelectComponent />
            </SafeAreaView>
            <SafeAreaView style={styles.containerDay}>
                <DaySelectComponent />
            </SafeAreaView>
    <View style={styles.container}>
      <View style={styles.rectangle} />
    </View>

            <View style={styles.containerSubmenu}>
                <View>
                    <TouchableOpacity onPress={handleChiPress} 
                    style={[styles.button, submenus === 'Chi' && styles.selectedButton]}>
                        <Text style={{fontSize:24,}}>
                            Chi tiêu
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={handleThuPress} 
                    style={[styles.button, submenus === 'Thu' && styles.selectedButton]}>
                        <Text style={{fontSize:24}}>
                            Thu nhập
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

      {isMenu1Visible && (
        
        <View style={[styles.dropdown]}>
            {
                menu1Items.map((item) =>
                    <TouchableOpacity style={{flexDirection:'row'}}onPress={() => handleMenuItemPress(item)}>
                      <Image style = {styles.image} source={images[item]}/>
                      <Text style={styles.dropdownItem}>{item}</Text>
                    </TouchableOpacity>
                )
            }
        </View>
      )}
      {isMenu2Visible && (
        <View style={[styles.dropdown]}>
            {
                menu2Items.map((item) =>
                    <TouchableOpacity style={{flexDirection:'row'}}onPress={() => handleMenuItemPress(item)}>
                      <Image style = {styles.image} source={images[item]}/>
                      <Text style={styles.dropdownItem}>{item}</Text>
                    </TouchableOpacity>
                )
            }
        </View>
      )}
        </View>
        </ScrollView>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        height: 'auto',
        marginTop: 20,
        flexGrow: 1,
    },

    scrollViewContent: {
        flexGrow: 1,
    },
    contentall: {
        gap: 10,
    },
    contentReturn: {
        flex: 1,
        alignItems: 'left',
        width: '100%',
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,
        
    },
    contentNote: {
        flex: 1,
        alignItems: 'left',
        width: '95%',
        alignSelf: 'center',
    },
    containerTime: {
        flex: 1,
        alignItems: 'left',
        width: '95%',
        alignSelf: 'center',
      },
    containerDay: {
        flex: 1,
        alignItems: 'left',
        width: '95%',
        alignSelf: 'center',
      },
    text: {
        fontSize: 24,
        marginBottom: 10,
    },
    notesText: {
        fontSize: 18,
        color: '#333333',
    },
    button:{
        marginHorizontal:10,
        paddingBottom: 10
    },
    containerSubmenu:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    selectedButton: {
      borderBottomWidth: 2,
      borderBottomColor: 'black',
    },
    rectangle: {
      width: '100%', // Split the screen in half horizontally
      height: 10, // Full height
      backgroundColor: 'lightgray',
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    dropdown: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      width: '100%',
    },
    dropdownItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
});