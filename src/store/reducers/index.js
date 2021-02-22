import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './authReducer';
import todosReducers from './todosReducer'

export default combineReducers({
    auth: authReducer,
    todos: todosReducers,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})