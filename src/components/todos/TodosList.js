import {View, Text, FlatList, TouchableOpacity, Switch} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTodo, markCompletedTodo} from '../../redux/action';
import { styles } from '../../styles/todoStyles/TodosListStyle';

const TodosList = () => {
  const todosList = useSelector(state => state.reducer.allTodos); //Getting all todos array
  const dispatch = useDispatch(); //useDispatch is used for dispatching actions.
  console.log(todosList, 'List of todos');

  //handleing switch of completed/non completed todo.
  const handleCompletedTodo = index => {
    dispatch(markCompletedTodo(index)); //dispatching the index of seleted todo into action.
  };
  return (
    <View>
      
      <FlatList
        data={todosList} //All todos array
        ListHeaderComponent={!todosList || todosList.length==0?<Text style={styles.noTodoText}>No Todos to display</Text>:null}
        renderItem={({item,index}) => (
          <View key={item.id} style={styles.listContainer}>
            {/* Switch for toggle button */}
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={item.isCompleted ? 'green' : '#f4f3f4'}
              onValueChange={() => handleCompletedTodo(index)}
              value={item.isCompleted}
              style={styles.toggleButton}
            />
               {/*Todo list text box and tag */}
            <View style={styles.listItemView}>
            <Text style={item.isCompleted?[ styles.listItemsText,styles.listItemsTextCompleted]:styles.listItemsText}>{item.item}</Text>
            
            {/*tag for completed or pending todo. here i am using conditional ternary operator */}
            <Text style={item.isCompleted? styles.completedTag:styles.pendingTag}>{item.isCompleted?'Complete':'Pending'}</Text>
            </View>

            {/* Handling delete button */}
            <TouchableOpacity style={styles.deleteButton} onPress={() => dispatch(deleteTodo(item.id))}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodosList;
