
import{createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';

interface IProduct{
  status:boolean;
  priceRnage:number;
}
const initialState:IProduct={
    status:false;
    priceRange:150;
    

};
const productSlice =createSlice({
    name:'product',
    initialState,reduces:{
toggoleState:(state)=>{
    state.status=!state.status;
},
setPriceRange:(state,action:PayloadAction<number>)=>{
state.priceRange=action.payload;
},









    },
});
export const{toggoleState,setPriceRange}=productSlice.actions;
export default productSlice.reducer;