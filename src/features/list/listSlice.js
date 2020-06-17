import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: JSON.parse(window.localStorage.getItem('list')) || [],
    item: window.localStorage.getItem('item') || ''
  },
  reducers: {
    add: (state, action) => {
      if (state.item !== '' && action.payload === 'Enter') {
        state.list.push({
          id: Date.now(),
          value: state.item,
          checked: false
        })
        state.item = ''
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
      .map(item=> item.checked = !item.checked);
      window.localStorage.setItem('list', JSON.stringify(state.list))
    }
  },
});

export const { add, setItem, remove, setChecked } = listSlice.actions;


export const selectItem = state => state.list.item;
export const selectList = state => state.list.list;

export default listSlice.reducer;
