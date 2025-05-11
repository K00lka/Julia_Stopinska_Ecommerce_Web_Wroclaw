import { useState } from 'react'
import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/ls'

type CartProviderProps = {
    children: React.ReactNode
}


type CartItem = {
    id: number
    quantity: number
}

type CartContext ={
    itemQuantity: (id: number) => number
    addItem: (id: number) => void
    removeItem: (id: number) => void
    clearCart: (id:number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const CartContext = createContext({} as CartContext);

export const useCart = () =>{
    return useContext(CartContext);
}

 
export const CartProvider = ({ children } : CartProviderProps) => {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cartItems', [])

    const cartQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0)
    

    const itemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    const addItem = (id: number) => {
        setCartItems (currentItems => {
            if (cartItems.find(item => item.id === id) == null) {
                return [...cartItems, { id, quantity: 1 }]
            } else {
                return cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    const removeItem = (id: number) => {
        setCartItems(currentItems => {
            if (cartItems.find(item => item.id === id)?.quantity === 1) {
                return cartItems.filter(item => item.id !== id)
            } else {
                return cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const clearCart = (id: number) => {
        setCartItems(currentItems =>{
            return cartItems.filter(item => item.id !== id)
        })
    }
    return <CartContext.Provider value={{itemQuantity, addItem, removeItem, clearCart, cartItems, cartQuantity}}>{children}</CartContext.Provider>
}