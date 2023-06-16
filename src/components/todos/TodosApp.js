import {View, Text} from 'react-native';
import React from 'react';
import Header from '../commonUI/Header';
import AddTodo from './AddTodo';
import TodosList from './TodosList';

const TodosApp = () => {
  //Main Container of Todos
  return (
    <View>
      <Header />
      <AddTodo />
      <TodosList />
    </View>
  );
};

export default TodosApp;
