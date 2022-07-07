import {createSlice} from '@reduxjs/toolkit';

const currencySlice  = createSlice({
    name:"currency",
    initialState:{
        label:"USD",
        symbol:"$"
    },
    reducers:{
        selectCurrency:(state , action)=> {
            state.label = action.payload.label;
            state.symbol = action.payload.symbol;
        }

    }
});

export const { selectCurrency } = currencySlice.actions;
export default currencySlice.reducer;