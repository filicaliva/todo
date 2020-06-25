import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: JSON.parse(window.localStorage.getItem('list')) || [],
    item: window.localStorage.getItem('item') || '',
    id: window.localStorage.getItem('id') || ''
  },
  reducers: {
    add: (state, action) => {
      if (action.payload === 'Enter') {
        if (state.item !== '' && state.id === '') {
          state.list.push({
            id: Date.now(),
            value: state.item,
            checked: false
          })
          state.item = ''
        } else {
          state.list
            .filter(item => +item.id === +state.id)
            .map(item => item.value = state.item)
          state.item = ''
          state.id = ''
          window.localStorage.setItem('id', state.id)
        }

      }

      window.localStorage.setItem('list', JSON.stringify(state.list))
      window.localStorage.setItem('item', state.item)
    },
    setItem: (state, action) => {
      state.item = action.payload
      window.localStorage.setItem('item', state.item)
    },
    remove: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload)
      window.localStorage.setItem('list', JSON.stringify(state.list))
    },
    setChecked: (state, action) => {
      state.list
        .filter(item => item.id === action.payload)
        .map(item => item.checked = !item.checked);
      window.localStorage.setItem('list', JSON.stringify(state.list))
    },
    setEdit: (state, action) => {
      state.item = action.payload.value
      state.id = action.payload.id
      window.localStorage.setItem('item', state.item)
      window.localStorage.setItem('id', state.id)
    }
  },
});




export const selectItem = state => state.list.item;
export const selectList = state => state.list.list;

export const { add, setItem, remove, setChecked, setEdit } = listSlice.actions;
export default listSlice.reducer;
