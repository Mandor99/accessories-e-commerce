import {createContext, useContext, useState, useMemo} from 'react'


export const cartContext = createContext()

export const CartProvider = ({children}) => {
    const [toggleCart, setToggleCart] = useState(false)
    const toggles = useMemo(() => {return {toggleCart, setToggleCart}}, [toggleCart])
    return(
        <cartContext.Provider value={toggles}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => useContext(cartContext)