import {createSlice} from '@reduxjs/toolkit'

export const dateSlice = createSlice({
    name: 'date',
    initialState: {
        day: '',
        formatDate: ''

    },
    reducers: {
        date: (state) => {
            const date = new Date()
            const number = date.getDay()          
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday' ,'Thirsday', 'Friday']
            const months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
            state.day = days[number]
            state.formatDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
        }
    }   
});

export const {date} = dateSlice.actions;


export const selectDate = state => state.date.day;
export const selectFormatDate = state => state.date.formatDate;

export default dateSlice.reducer;