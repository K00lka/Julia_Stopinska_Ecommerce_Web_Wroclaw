import { useCart } from "../context/CartContext";
import { Confirm } from "../components/Confirm";
import ProductsList from '../data/products.json';
import { Stack } from "react-bootstrap";

export const Confirmation = () => {
    const{ cartItems } = useCart();
    return <div>
        <h1>Gratulacje!</h1>
        <h2>Twoje zamówienie zostało złożone</h2>
        <h2>Podsumowanie zamówienia:</h2>
        <div>
            <Stack gap ={3}>
                {cartItems.map(item => 
                <Confirm key={item.id} {...item}  />)}
                <div>Suma: {""} {cartItems.reduce((total, cartItem)=>{
                const item = ProductsList.find((item) => item.id === cartItem.id)
                return total + (item?(item.price.main+item.price.fractional/100):0) * cartItem.quantity
            }, 0)
         }</div>
        

            </Stack> 
            
        </div>
    </div>
}