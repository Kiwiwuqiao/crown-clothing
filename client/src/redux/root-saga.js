import { all, call } from 'redux-saga/effects'
import { cartSagas } from './reducers/cart/cart.sagas'
import { shopSagas } from './reducers/shop/shop.sagas'
import { userSagas } from './reducers/user/user.sagas'

export default function* rootSaga() {
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ])
}

