import {ADD_TODO, DELETE_TODO, IS_COMPLETED} from './constants';

//Add todo action to add
export const addTodo = item => ({
  type: ADD_TODO,
  payload: {
    id: item.id,
    item: item.todo,
    isCompleted: item.isCompleted,
  },
});

//Delete todo action to delete
export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

//Mark Completed todo to mark completed/non completed
export const markCompletedTodo = index => ({
  type: IS_COMPLETED,
  payload: {
    index,
  },
});
