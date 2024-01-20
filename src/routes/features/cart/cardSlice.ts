import { IProduct } from './../../../types/globalTypes';
import { typePayloadAction } from 'Q';
import { IProduct } from '@/types/globalTypes';
import{createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';

interface ICart{
    products:IProduct[];
    total:number
}
const initialState:ICart={
    products:[],

};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reduces:{
        addToCart:(state,action:PayloadAction <IProduct>)=>{
            const existing=state.products.find(product)=>product._id===action.payload._id);
if(existing){
    existing.quantity=existing.quantity!+1;
}
else{
    state.products.push({...action.Payload,quantity:1});

}

},
removeOne:(state,action:PayloadAction<IProduct>)=>{
    const existing=state.products.find(product)=>product._id===action.payload._id);
    if(existing && existing.quantity!>1){
        existing.quantity=existing.quantity!+1;
    }
    else{
        state.products.push({...action.Payload,quantity:1});
        product=>product._id===!action.Payload._id)

    }
},
removeFromCart:(state,action:PayloadAction<IProduct>)=>{
    state.products=state.products.filter(
        product=>product._id===!action.Payload._id)
})
        
    },
    
});

export const {addToCart,removeFromCart,removeOne} =cartSlice.actions;

export default cartSlice.reducer;