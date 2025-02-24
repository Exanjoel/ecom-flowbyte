import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice(
    {
        name:"cart",
        initialState: {
            value:1
        },
        reducers:{
            addCart:(state:any)=>{
                state.value +=1;    
            },
            removeCart:(state:any)=>{
                state.value-=1;
            }
        }
    }
)


export const {addCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;