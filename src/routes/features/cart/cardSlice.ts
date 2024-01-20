import { typePayloadAction } from 'Q';
import { IProduct } from '@/types/globalTypes';
import{createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface ICart{
    products:IProduct[];
}
const initialState:ICart={
    products:[],

};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reduces:{
        addToCart:(state,action:PayloadAction <IProduct>)=>{
state.products.push(action.Payload);
        }
    },
    
});

export const {addToCart} =cartSlice.actions;

export default cartSlice.reducer;