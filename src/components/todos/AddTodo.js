import {View, Text, Button, TextInput} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../../redux/action';
import {styles} from '../../styles/todoStyles/AddTodoStyle';

const AddTodo = () => {
  const [enteredTodo, setEnteredTodo] = useState('');
  const dispatch = useDispatch(); //useDispatch is used for dispatching actions.
  const todosList = useSelector(state => state.reducer.allTodos); //Getting all todos array

  const handleAddTodo = () => {
    setEnteredTodo(''); //Making empty textInput after adding todo

    //Dispatching data into addTodo action
    dispatch(
      addTodo({
        id: todosList.length !== 0 ? todosList[todosList.length - 1].id + 1 : 0, //Id will be zero if array is empty otherwise it'll increase the id with +1
        todo: enteredTodo,
        isCompleted: false,
      }),
    );
  };
  return (
    <View>
      <TextInput
        placeholder="Enter your todo"
        value={enteredTodo}
        style={styles.textInput}
        onChangeText={task => setEnteredTodo(task)}
      />

      <Button
        title="Add Todo"
        disabled={enteredTodo === ''}
        onPress={handleAddTodo}
      />
      {/* disabled if enetered todo is empty */}
    </View>
  );
};

export default AddTodo;
