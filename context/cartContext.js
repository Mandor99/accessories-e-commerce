import {createContext, useContext, useState, useMemo, useReducer} from 'react'
import { initialState, cartReducer } from './cartReducer'


export const cartContext = createContext()

export const CartProvider = ({children}) => {
    const [toggleCart, setToggleCart] = useState(false)
    const toggles = useMemo(() => {return {toggleCart, setToggleCart}}, [toggleCart])
    const [stateCart, dispatch] = useReducer(cartReducer, initialState)
    const values = useMemo(() => {return {stateCart, dispatch}}, [stateCart, dispatch])
    return(
        <cartContext.Provider value={{...toggles, ...values}}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => useContext(cartContext)