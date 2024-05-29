import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity, ImageBackground, SafeAreaView, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReturnButton from '../../components/ReturnButton';
import TextBox from '../../components/TextBox';
import TimeSelectComponent from '../../components/TimeSelect';
import DaySelectComponent from '../../components/DaySelect';
import NumberInput from '../../components/NumberInput';
import CheckBox from '../../components/CheckBox';
export default function AddScreen({navigation})
{
    const [notes, setNotes] = useState('');
    const [submenus, setSubmenus] = useState('Chi');
    const [isMenu1Visible, setIsMenu1Visible] = useState(true);
    const [isMenu2Visible, setIsMenu2Visible] = useState(false);
    const [isItemSelected, setIsItemSelected] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const images = {
        'Ăn uống': require('../../assets/food.png'),
        'Di chuyển': require('../../assets/transport.png'),
        'Giáo dục': require('../../assets/edu.png'),
        'Quần áo': require('../../assets/clothes.png'),
        'Làm đẹp': require('../../assets/beauty.png'),
        'Sở thích': require('../../assets/entertaining.png'),
        'Sự kiện': require('../../assets/event.png'),
        // Add all other items similarly
      };
    const menu1Items = ['Ăn uống', 'Di chuyển', 'Giáo dục', 'Quần áo','Làm đẹp','Sở thích','Sự kiện'];
    const menu2Items = ['Ăn uống', 'Di chuyển', 'Giáo dục', 'Quần áo','Làm đẹp','Sở thích','Sự kiện'];
    const menuItems = submenus === 'Chi' ? menu1Items : menu2Items;
    const handleReturnPress = () => 
    {
        navigation.navigate('Home');
    }
    const handleChiPress = () => 
    {
        setSubmenus('Chi')
        setIsMenu1Visible(true);
        setIsMenu2Visible(false);
        setIsItemSelected(false);
    }
    const handleThuPress = () => 
    {
        setSubmenus('Thu')
        setIsMenu2Visible(true);
        setIsMenu1Visible(false);
        setIsItemSelected(false);
    }
    const handleMenuItemPress = (item) => {
      console.log(`Selected: ${item}`);
      setIsMenu1Visible(false);
      setIsMenu2Visible(false);
      setIsItemSelected(true);
      setSelectedItem(item);
      console.log(isItemSelected);
    };
    const handleSelectedItemPress = (item) => {
      console.log(`Selected: ${item}`);
    };
    const handleCancelButtonPress = (item) => {
      console.log(`canceled`);
      setIsItemSelected(false)
      setSelectedItem(null)
    };
    const handleSaveButtonPress = (item) => {
      console.log(`Saving`);
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
            <SafeAreaView style={styles.containerDay}>
                <CheckBox label="Bật thông báo" />
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
                menu1Items.map((item, index) =>
                    <TouchableOpacity style={{flexDirection:'row'}} key={index} onPress={() => handleMenuItemPress(item)}>
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
                menu2Items.map((item, index) =>
                    <TouchableOpacity style={{flexDirection:'row'}} key={index} onPress={() => handleMenuItemPress(item)}>
                      <Image style = {styles.image} source={images[item]}/>
                      <Text style={styles.dropdownItem}>{item}</Text>
                    </TouchableOpacity>
                )
            }
        </View>
      )}
      {isItemSelected && (
        <View style={[styles.dropdown]}>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} onPress={handleSelectedItemPress(selectedItem)}>
                <View style={{flexDirection:'row'}}>
                    <Image style = {styles.image} source={images[selectedItem]}/>
                    <Text style={styles.dropdownItem}>{selectedItem}</Text>
                </View>
                <NumberInput style={styles.numberInput}/>
            </TouchableOpacity>
        </View>
      )}
        </View>
        </ScrollView>
        {isItemSelected && (
        <View style={styles.bottomScreen}>
                <TouchableOpacity style={styles.saveButtonContainer} onPress={()=>{handleCancelButtonPress()}}>
                    <View style={{backgroundColor:'#FF5656', paddingHorizontal:60,paddingVertical:20,borderRadius:10}}>
                        <Text style={styles.saveButtonText}>Cancel</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButtonContainer} onPress={()=>{handleSaveButtonPress()}}>
                    <View style={{backgroundColor:'#2DE55C', paddingHorizontal:60,paddingVertical:20,borderRadius:10}}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </View>
                </TouchableOpacity>
        </View>
      )}
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
      backgroundColor: '#E9F5FD',
      padding: 10,
      borderRadius: 5,
      width: '100%',
      gap:10,
    },
    dropdownItem: {
      padding: 10,
      alignSelf:'center'
    },
    numberInput: {
        
    },
    saveButtonContainer:{
        bottom: 20,
        flexDirection:'row', alignItems:'center',
    },
    saveButtonText:{
        color: 'white'
    },
    bottomScreen:{
        flexDirection:'row',
        marginHorizontal:20,
        justifyContent:'space-evenly',
    },
});