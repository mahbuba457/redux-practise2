import { Products } from '@/pages/Products';
import{configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import from './features/Products/productSlice';
const store=configureStore({
    reducer:{
    cart:cartReducer,
    product:productReduser
    },
});
export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
export default store;