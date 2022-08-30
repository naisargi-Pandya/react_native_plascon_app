import React, {useState} from 'react';
import Assets from '../Assets/Images/index';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {Dropdown} from 'react-native-element-dropdown';
import {Table, Row, Rows, TableWrapper} from 'react-native-table-component';

const data = [
  {label: ' 1', value: '1'},
  {label: ' 2', value: '2'},
  {label: '3', value: '3'},
];

const CONTENT = {
  tableHead: ['No', 'Item', 'Pack', 'Qty','Action'],
  tableData: [
    ['1','abc', '2', '3',Assets.eyeBG],
    ['a','abc', 'b', 'c',Assets.eyeBG],
    ['1', 'abc','2', '3',Assets.eyeBG],
    ['a', 'abc','b', 'c',Assets.eyeBG],
  ],
};

const AddOrderComponent = ({navigation}) => {
  const [itemName, setItemName] = useState('');
  const [quantityName, setQuantityName] = useState('');
  const [value, setValue] = useState(null);

  const buttonRounded = () => {
    Alert.alert('Button Clicked');
  };

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
          Add Order
        </Text>
      </View>

      <ScrollView>
        <View>
          <View style={{padding: 10, margin: 10}}>
            <TextInput
              style={styles.textUnderlineView}
              placeholder="Item"
              value={itemName}
              onChangeText={itemName => setItemName(itemName)}></TextInput>
          </View>

          <View style={{padding: 10, margin: 10}}>
            <TextInput
              style={styles.textUnderlineView}
              placeholder="Quantity"
              value={quantityName}
              onChangeText={quantityName =>
                setQuantityName(quantityName)
              }></TextInput>
          </View>

          <View>
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
              placeholder="Pack"
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>

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
              <Text style={styles.roundedButtonTextStyle}> Add </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.roundedButtonViewStyle}
              onPress={buttonRounded}>
              <Text style={styles.roundedButtonTextStyle}> Clear </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <Table >
              <Row borderStyle={{backgroundColor:'lightgrey',color:'black',
              fontWeight: 'bold'}}
                data={CONTENT.tableHead}
                flexArr={[1, 2, 1, 1]}
                style={styles.head}
                textStyle={styles.text}/>
              <TableWrapper style={styles.wrapper}>
              
                <Rows 
                  data={CONTENT.tableData}
                  flexArr={[1, 2, 1,1]}
                  style={styles.row}
                  textStyle={styles.text}/>
              </TableWrapper>
            </Table>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate('splash')}
        style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default AddOrderComponent;

const styles = StyleSheet.create({
  textUnderlineView: {
    textAlign: 'left',
    fontSize: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 18,
    left: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
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
    marginHorizontal: 60,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  container: {flex: 1, padding: 16, paddingTop: 20},
  head: {height: 40, backgroundColor: 'lightgrey'},
  wrapper: {flexDirection: 'row'},
  row: {height: 30,borderBottomWidth: 0.5,margin:5},
  text: {textAlign: 'left',margin:5,color:'black',fontSize:16},
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
});
