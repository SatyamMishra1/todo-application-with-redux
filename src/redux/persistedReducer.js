import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from '@react-native-async-storage/async-storage'
import rootReducer from "./rootReducer";

let presistConfig={
    key:"root",
    version: 1,
    storage:AsyncStorage // AsyncStorage is used for storing the data.
};
export default persistedReducer = persistReducer(presistConfig,rootReducer) //persistReducer will persist/remain the data into reducer