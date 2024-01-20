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
    total:0;

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
state.total+=action.payload.price;


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
    state.total-=action.payload.price;

},
removeFromCart:(state,action:PayloadAction<IProduct>)=>{
    state.products=state.products.filter(
        product=>product._id===!action.Payload._id)
})
        
    },
    state.total-=action.payload.price*ToastAction.payload.quantity;

});

export const {addToCart,removeFromCart,removeOne} =cartSlice.actions;

export default cartSlice.reducer;