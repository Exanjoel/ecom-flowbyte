import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "./slice";
import filterSlice from "./filterData"
export default configureStore(
    {
        reducer:{
            cart:cartSlice,
            filter: filterSlice
        }
    }
)