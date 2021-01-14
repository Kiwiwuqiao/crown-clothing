import { combineReducers } from "redux";
import cartReducer from "./reducers/cart/cart.reducer";
import userReducer from "./reducers/user/user.reducer";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import directoryReducer from "./reducers/directory/directory.reducer";
import shopReducer from "./reducers/shop/shop.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["cart"]
}

export default persistReducer(persistConfig, rootReducer)