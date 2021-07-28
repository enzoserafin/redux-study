import { all, takeLatest, select } from 'redux-saga/effects'
import { addProductToCartRequest } from './action'
import { IState } from '../..'

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

function* checkProductStock({ payload }: CheckProductStockRequest) {
    const { product } = payload
    const currentQuantity: number = yield select((state: IState) => {
        return state.cart.items
            .find(item => item.product.id === product.id)?.quantity ?? 0
    })

    console.log(currentQuantity)

    console.log('Adicionou ao carrinho')
}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])