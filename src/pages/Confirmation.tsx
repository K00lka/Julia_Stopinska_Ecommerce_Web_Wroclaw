import { useCart, type CartItem } from "../context/CartContext";
import { Confirm } from "../components/Confirm";
import ProductsList from '../data/products.json';
import { Stack } from "react-bootstrap";
import { useEffect, useState } from "react";

export const Confirmation = () => {
    const{ cartItems, clearAllCart } = useCart();
    const [localItems, setLocalItems] = useState<CartItem[]>([]);

    useEffect(() => {
        if(cartItems.length > 0) {
            setLocalItems(cartItems);
            clearAllCart()
        }
    }, [cartItems]);

    return <div>
        <h1>Gratulacje!</h1>
        <h2>Twoje zamówienie zostało złożone</h2>
        <h2>Podsumowanie zamówienia:</h2>
        <div>
            <Stack gap ={3}>
                {localItems.map(item => 
                <Confirm key={item.id} {...item}  />)}
                <div>Suma: {""} {localItems.reduce((total, localItem)=>{
                const item = ProductsList.find((item) => item.id === localItem.id)
                return total + (item?(item.price.main+item.price.fractional/100):0) * localItem.quantity
            }, 0)
         }</div>
        

            </Stack> 
            
        </div>
    </div>
}