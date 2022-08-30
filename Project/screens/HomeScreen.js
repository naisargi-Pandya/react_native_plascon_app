import React, {useState} from 'react';
import Assets from '../Assets/Images/index';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Alert,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-datepicker';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const DATA = [
  {
    id: '1',
    title: '1',
    titleBody: 'vhggh',
    titleDetail: '14 feb 20199:30 AM',
    image: Assets.eyeBG,
    image2: Assets.menuIcon,
  },
  {
    id: '2',
    title: '2',
    titleBody: 'vhggh',
    titleDetail: '14 feb 20199:30 AM',
    image: Assets.eyeBG,
    image2: Assets.menuIcon,
  },
  {
    id: '3',
    title: '3',
    titleBody: 'JAVA',
    titleDetail: '14 feb 20199:30 AM',
    image: Assets.eyeBG,
    image2: Assets.menuIcon,
  },
];

const DropdownComponent = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [date, setDate] = useState(new Date());

  const buttonRounded = () => {
    Alert.alert('Button Clicked');
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity  onPress={() => navigation.navigate('addOrder')} >
      <View style={{flex: 1, marginTop: 10}}>
        <View style={styles.flatListStyle}>
          <Text style={styles.flatTextTitleStyle}>{item.title}</Text>
          <Text style={styles.flatTextTitleBodyStyle}>{item.titleBody}</Text>
          <Text style={styles.flatTextTitleDetailStyle}>
            {item.titleDetail}
          </Text>
          <View
            style={{
              height: '50%',
              width: '30%',
              marginTop: -30,
              marginHorizontal: 20,
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
            <Image source={item.image} style={styles.flatImageStyle} />
            <Image source={item.image2} style={styles.flatImageStyle} />
          </View>
        </View>
      </View>
      </TouchableOpacity>
    );
  };

  const openDrawer=()=>{
    console.log(props,'check here ')
    props.openDrawer()    
  }

  return (
    <SafeAreaView>
      <View style={{height: 60, backgroundColor: '#ed174f'}}>
        <TouchableOpacity
          style={{
            margin: 16,
            position: 'absolute',
          }}>
          <Image
            source={Assets.menuIcon}
            style={{
              height: 20,
              width: 20,
              padding: 3,
              marginTop: 8,
              alignSelf: 'flex-start',
              resizeMode: 'center',
            }}
            onPress={openDrawer}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
            margin: 14,
            left: 50,
            alignItems: 'flex-start',
          }}>
          Order List
        </Text>
      </View>

      <ScrollView>
      <View >

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Customer"
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
        <View
          style={{
            flex:1,
            margin: 16,
            height: 50,
            borderBottomColor: 'gray',
            borderBottomWidth: 0.5,
          }}>
          <DatePicker
            date=""
            mode="date"
            placeholder="Order List"
            format="YYYY-MM-DD"
            showIcon={true}
            confirmBtnText="Подтвердить"
            cancelBtnText="Отмена"
            onDateChange={setDate}
            customStyles={{
              dateInput: {
                borderWidth: 0,
              },
              dateText: {
                color: 'black',
                textAlign: 'left',
                fontSize: 20,
              },
              placeholderText: {
                fontSize: 17,
                color: 'grey',
              },
              dateIcon: {
                flexDirection: 'row',
                position: 'relative',
                alignSelf: 'flex-end',
                left: 200,
                top: 5,
              },
            }}
          />
        </View>
        <View style={{flex: 1, marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              alignSelf: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              style={styles.roundedButtonViewStyle}
              onPress={buttonRounded}>
              <Text style={styles.roundedButtonTextStyle}> Search </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.roundedButtonViewStyle}
              onPress={buttonRounded}>
              <Text style={styles.roundedButtonTextStyle}> Reset </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
          }}>
          <FlatList
            data={DATA}
            keyExtractor={item => item.image}
            renderItem={renderItem} 
          /> 
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    left: 10,
    color:'grey',
  },
  button: {
    backgroundColor: '#ed174f',
    padding: 10,
    margin: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },
  roundedButtonViewStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#ed174f',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#fff',
  },
  roundedButtonTextStyle: {
    marginHorizontal: 50,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  flatTextTitleStyle: {
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444444',
    alignSelf: 'flex-start',
  },
  flatTextTitleBodyStyle: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#444444',
    marginVertical: 5,
    alignSelf: 'flex-start',
  },
  flatTextTitleDetailStyle: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#7b7b7b',
    marginVertical: 5,
    alignSelf: 'flex-start',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  flatImageStyle: {
    borderRadius: 30,
    backgroundColor: 'lightgrey',
    padding: 15,
    marginHorizontal: 20,
    width: 5,
    height: 5,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  DatePickerStyle: {
    height: 30,
    width: 30,
    padding: 5,
    margin: 10,
    fontSize: 17,
    alignContent: 'flex-end',
  },
  flatListStyle: {
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
});
