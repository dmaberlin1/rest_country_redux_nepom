import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const loadCountryByName = createAsyncThunk(
    '@@details/load-country-by-name',
    (name, {extra: {client, api}}) => {
        return client.get(api.searchByCountry(name))
    }
);

export const loadNeighborsByBorder = createAsyncThunk(
    '@@details/load-neighbors',
    (borders, {extra: {client, api}}) => {
        return client.get(api.filterByCode(borders));
    }
);

const initialState = {
    currentCountry: null,
    neighbors: [],
    status: 'idle',
    error: null,
}

const detailsSlice = createSlice({
    name: '@@details',
    initialState: initialState,
    reducers: {
        clearDetails: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountryByName.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCountryByName.rejected,(state, action)=>{

            })
            .addCase(loadCountryByName.fulfilled,(state, action)=>{

            })
            .addCase(loadNeighborsByBorder.fulfilled,(state, action)=>{
                state.neighbors=action.payload.data.map(country=>country.name);
            })
    }
});

export const {clearDetails}=detailsSlice.actions
export const detailsReducer=detailsSlice.reducer;
