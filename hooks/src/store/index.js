import { reducer } from './reducers'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
    productNumber: 10
}

export {
    reducer,
    initialState
}