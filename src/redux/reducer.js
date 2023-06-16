import {View, Text} from 'react-native';
import React from 'react';
import {ADD_TODO, IS_COMPLETED} from './constants';
import {DELETE_TODO} from './constants';

const initialState = {
  allTodos: [], //Initialising the all todos list.
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const {id, item, isCompleted} = action.payload;
      console.log(action.payload, 'payload');
      return {
        ...state,
        allTodos: [...state.allTodos, {id, item, isCompleted}], //Adding the todo object into allTodos array.
      };
    }
    case DELETE_TODO: {
      const {id} = action.payload;
      return {
        ...state,
        allTodos: state.allTodos.filter(todo => todo.id != id), //Filtering the allTodos, if "id" will not match it will return otherwise it will not return so that we'll delete the selected id.
      };
    }
    case IS_COMPLETED: {
      const {index} = action.payload; //Index from selected button
      const todo = state.allTodos[index]; //todo is the selected object.

      return {
        ...state,
        allTodos: [
          ...state.allTodos.slice(0, index), //Slicing the array till index-1
          {...todo, isCompleted: !todo.isCompleted}, //Marking the toggle true/false of selected index on changing the key value of "isCompleted".
          ...state.allTodos.slice(index + 1), //Again adding the remaining objects into array.
        ], 
      };
    }

    default:
      return state;
  }
};

export default reducer;
