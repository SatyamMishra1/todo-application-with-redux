import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  toggleButton: {
    flex: 1,
    alignItems: 'center',
  },
  listItemView: {
    flex: 3,
    flexDirection:'row',
    alignItems: 'flex-start',
    padding: 13,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: 'red',
    elevation: 10,
    backgroundColor: '#f9c2ff',
  },

  
  listItemsText: {
    flex:2,
    fontSize: 20,
  },
  completedTag:{
    flex:1,
    backgroundColor:'green',
    height:20,
    color:'#fff'
  },
  pendingTag:{
    flex:1,
    backgroundColor:'orange',
    height:20,
    color:'#fff'
  },
  listItemsTextCompleted: {
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    
    marginHorizontal: 16,
    height: 40,
    borderRadius: 10,
    alignSelf:'center',
    
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 15,
    alignItems:'center'
  },
  noTodoText:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    marginTop:10
  }
});
