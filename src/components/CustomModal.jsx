import {
  Modal,
  View,
  ScrollView,
  Dimensions,
  Text,
  StatusBar,
} from 'react-native';
import React from 'react';
import TodoList from './TodoList';
import ImagePicker from './ImagePicker';
import ColorPicker from './ColorPicker';
import Form from './Form';

const {width, height} = Dimensions.get('window');

const CustomModal = ({visible, onRequestClose, components}) => {
  const renderSelectedComponent = type => {
    return components.filter(x => x === type).length > 0;
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      animationType="slide">
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#0496C7'} />
        <View style={{height: 55, backgroundColor: '#0496C7'}}>
          <Text style={styles.text}>Custom Modal</Text>
        </View>
        <ScrollView style={styles.subContainer}>
          {renderSelectedComponent(1) && <ImagePicker />}
          {renderSelectedComponent(2) && <TodoList />}
          {renderSelectedComponent(3) && <Form />}
          {renderSelectedComponent(4) && <ColorPicker />}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = {
  container: {
    flex: 1,
    width,
    height,
  },
  subContainer: {
    flex: 1,
    width,
  },
  text: {
    fontSize: 25,
    color: '#fff',
    padding: 10,
    paddingLeft: 50,
  },
};

export default CustomModal;
