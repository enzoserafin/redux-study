export enum ActionTypes {
    addProductToCartRequest = 'ADD_PRODUC_TO_CART_REQUEST',
    addProductToCartSuccess = 'ADD_PRODUC_TO_CART_SUCCESS',
    addProductToCartFailure = 'ADD_PRODUC_TO_CART_FAILURE'
}

export interface IProduct {
    id: number
    title: string
    price: number
}

export interface ICartItem {
    product: IProduct
    quantity: number
}

export interface ICartState {
    items: ICartItem[]
    failedStockCheck: number[]
}