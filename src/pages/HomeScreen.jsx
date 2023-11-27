import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import CustomModal from '../components/CustomModal';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const items = [
    {id: 1, name: 'Image Picker'},
    {id: 2, name: 'Todo List'},
    {id: 3, name: 'Form'},
    {id: 4, name: 'Color Picker'},
  ];

  const toggleItem = itemId => {
    const isSelected = selectedItems.includes(itemId);
    if (isSelected) {
      setSelectedItems(selectedItems.filter(item => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const renderItem = ({item}) => (
    <View
      style={{flexDirection: 'row', alignItems: 'center', width: width - 100}}>
      <RadioButton
        value={item.name}
        onPress={() => toggleItem(item.id)}
        status={selectedItems.includes(item.id) ? 'checked' : 'unchecked'}
      />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#0496C7'} />
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.header}>
          Choose the items you want to display in modal
        </Text>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        <TouchableOpacity
          style={{
            ...styles.buttonStyle,
            opacity: selectedItems.length === 0 ? 0.5 : 1,
          }}
          onPress={() => {
            if (selectedItems.length > 0) toggleModal();
          }}
          disabled={selectedItems.length === 0}>
          <Text style={styles.textStyle}>Show Custom Modal</Text>
        </TouchableOpacity>
      </View>
      <CustomModal
        visible={isModalVisible}
        onRequestClose={toggleModal}
        components={selectedItems}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  itemText: {
    color: '#000',
    fontWeight: '400',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#0496C7',
    borderRadius: 6,
    paddingVertical: 12,
    marginVertical: 34,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    width,
  },
  text: {
    fontSize: 25,
    color: '#fff',
    padding: 10,
    paddingLeft: 50,
  },
  headerContainer: {
    height: 55,
    backgroundColor: '#0496C7',
    width,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  },
});

export default HomeScreen;
