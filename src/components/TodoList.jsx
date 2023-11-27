import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IconButton} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const FlatlistItem = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  const handleAddTodo = () => {
    if (todo !== '') {
      setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
      setTodo('');
    }
  };

  const handleDeleteTodo = id => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const handleEditTodo = todo => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map(item => {
      if (item.id === editedTodo.id) {
        return {...item, title: todo};
      }
      return item;
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo('');
  };

  const renderTodos = ({item, index}) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <IconButton
          icon="pencil"
          iconColor="#fff"
          onPress={() => handleEditTodo(item)}
        />
        <IconButton
          icon="trash-can"
          iconColor="#fff"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Add a task"
          value={todo}
          onChangeText={userText => setTodo(userText)}
          placeholderTextColor={'#000'}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            if (editedTodo) {
              handleUpdateTodo();
            } else {
              handleAddTodo();
            }
          }}>
          <Text style={styles.buttonText}>{editedTodo ? 'Save' : 'Add'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todoList}
        renderItem={renderTodos}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.line} />
    </View>
  );
};

export default FlatlistItem;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: '#0496C7',
    borderRadius: 6,
    paddingVertical: 12,
    marginVertical: 34,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    width: '25%',
    height: 45,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: '#000',
    width: '70%',
    height: 45,
  },
  container: {
    width: '100%',
    minHeight: 150,
    padding: 15,
  },
  itemContainer: {
    backgroundColor: '#0496C7',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#fff',
    width: '70%',
  },
  headerText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
  },
  line: {
    height: 1,
    width,
    backgroundColor: '#747474',
  },
});
