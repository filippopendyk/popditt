import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:'filter',
    initialState: {
        filter: 'best'
    },
    reducers: {
        setFilterAsBest(state){
            state.filter = 'best'
        },
        setFilterAsTop(state){
            state.filter = 'top'
        },
        setFilterAsNew(state){
            state.filter = 'new'
        },
        setFilterAsDefault(state){
            state.filter = 'best'
        }
    }
})

export const selectFilter = (state) => state.filter.filter;

export const { setFilterAsBest, setFilterAsNew, setFilterAsTop, setFilterAsDefault } = filterSlice.actions;

export default filterSlice.reducer;