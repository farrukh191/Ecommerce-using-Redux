import {createStore, combineReducers} from 'redux'
import ProductsReducer from './reducers/ProductsReducer'
import { devToolsEnhancer } from 'redux-devtools-extension';
import CartReducer from './reducers/CartReducer';

const root = combineReducers({
    ProductsReducer,
    CartReducer
})

// devtoolsenhance is lye likha q k react-redux extension install krne k bad ye npm install krna prega

const store = createStore(root, devToolsEnhancer());
export default store;