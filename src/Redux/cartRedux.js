import {createSlice} from '@reduxjs/toolkit';

const cartSlice  = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct: (state , action) => {
            state.quantity +=1;
            state.products.push(action.payload);
            state.total += action.payload.totalPrice;
        },
        updateProductQuantity:(state , action) => {
            if(action.payload.type === "dec"){
                // eslint-disable-next-line
                state.products.map(product => {
                    if(product.idCart === action.payload.id && product.quantity > 1){
                        product.quantity -=1;
                        product.totalPrice = product.price * product.quantity
                    }else if(product.idCart === action.payload.id && product.quantity > 0){
                        state.products = state.products.filter(item => item.idCart !==action.payload.id);
                    }
                })
            }else{
                // eslint-disable-next-line
                state.products.map(product => {
                    if(product.idCart === action.payload.id){
                        product.quantity +=1;
                        product.totalPrice = product.price * product.quantity
                    }
                })
            }
            let total = 0;
            let quantity =0;
            // eslint-disable-next-line
            state.products.map(product => {
                total = total + product.totalPrice
                quantity = quantity + 1
            })
            state.total = total;
            state.quantity = quantity
        },
        updateProductCurrency:(state , action)=>{
            // eslint-disable-next-line
            state.products.map(product => {
                if(product.prices){
                    const priceElement = product.prices.find(item => item.currency.label===action.payload.label)
                    product.price = priceElement.amount;
                    product.totalPrice = product.price * product.quantity
                }
            })

            let total = 0;
            // eslint-disable-next-line
            state.products.map(product => {
                total = total + product.totalPrice
            })
            state.total = total;
        }
    }
});

export const { addProduct,updateProductQuantity,updateProductCurrency } = cartSlice.actions;
export default cartSlice.reducer;