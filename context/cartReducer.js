export const addToCartAction = 'ADD_TO_CART'
export const removeFromCartAction = 'REMOVE_FROM_CART'
export const incQtyInCart = 'INC_CART_PRODUCT'
export const decQtyInCart = 'DEC_CART_PRODUCT'

export const getTotalPrice = (cart) => cart.reduce((sum, product) => sum + Number(product.price*product.quantity), 0)
export const getTotalQuantities = (cart) => cart.reduce((sum, product) => sum + Number(product.quantity), 0)


export const initialState = {
    cart: []
}

export const cartReducer = (state=initialState, {type, payload: {product, qty, id}}) => {
    switch (type) {
        case addToCartAction:
            const foundedProduct = state.cart.find(prod => prod._id === product._id)
            if(foundedProduct) {
                const updatedProduct = state.cart.map(prod => prod._id === product._id ? {...prod, quantity: prod.quantity + qty} : prod)
                return {...state, cart: updatedProduct}
            } else {
                return {...state, cart: [...state.cart, {...product, quantity: qty}]}
            }

        case removeFromCartAction:
            const newCart = state.cart.filter((product) => product._id !== id)
            return {...state, cart: newCart}

        case incQtyInCart:
            const updatedCartWithInc = state.cart.map(prod => prod._id === id ? {...prod, quantity: prod.quantity+1} : prod)
            return {...state, cart: updatedCartWithInc}

        case decQtyInCart:
            const updatedCartWithDec = state.cart.map(prod => prod._id === id ? {...prod, quantity: prod.quantity-1 < 1 ? 1 : prod.quantity-1} : prod)
            return {...state, cart: updatedCartWithDec}

        default:
            break;
    }
}

