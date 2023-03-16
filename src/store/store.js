import {configureStore} from "@reduxjs/toolkit";
import addressSlice from "./addressSlice";


export default configureStore({
    reducer:{
        address: addressSlice
    }
})