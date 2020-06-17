import { configureStore, combineReducers } from '@reduxjs/toolkit';
import listReducer from '../features/list/listSlice';
import dateReducer from '../features/date/DateSlicer'

const reducer = combineReducers({
  list: listReducer,
  date: dateReducer
})

export default configureStore({
  reducer
});
