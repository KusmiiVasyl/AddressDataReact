import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AddressType} from "../enums/AddressType";
import {AddressApi} from "../api/addressApi";

const initialState = {
    id: undefined,
    country: '',
    city: '',
    street: '',
    typeAddress: AddressType.OFFICE
}

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        updateAddressState: (state, action) => {
            return {...state, ...action.payload}
        },
        resetAddressState: (state, action) => initialState
    },
    extraReducers: builder => {
        builder.addCase(getAddress.fulfilled, (state, action) => action.payload)
        builder.addCase(createAddress.fulfilled, (state, action) => action.payload)
        builder.addCase(updateAddress.fulfilled, (state, action) => action.payload)
        builder.addCase(deleteAddress.fulfilled, (state, action) => action.payload)
    }

})

export const getAddress = createAsyncThunk(
    'address/get',
    async (id) => await AddressApi.get(id)
)

export const createAddress = createAsyncThunk(
    'address/create',
    async (address) => await AddressApi.create(address)
)

export const updateAddress = createAsyncThunk(
    'address/update',
    async (address) => await AddressApi.update(address)
)

export const deleteAddress = createAsyncThunk(
    'address/delete',
    async (id) => await AddressApi.delete(id)
)

export const {updateAddressState, resetAddressState} = addressSlice.actions

export default addressSlice.reducer