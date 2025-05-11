import { Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";

import ProductsList from '../data/products.json';

type CartItemProps = {
    id: number
    quantity: number
}

export const CartItem = ({ id, quantity } : CartItemProps) => {
   const {clearCart, addItem, removeItem} = useCart();
   const item = ProductsList.find((item) => item.id === id)
   if (item == null) return null;
   return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center p-4">
        <img src={item.image} className="flex-col  w-91 h-75 object-cover rounded-t-lg p-4"  ></img>
        <div className="flex-col items-center justify-center bg-white shadow-xs rounded-lg p-4">
            <h2 className="flex items-center justify-center  text-xl font-semibold mt-2 p-4">{item.name}</h2>
            <div className="flex  items-center justify-center">
                <button className="flex-col p-4 shadow-md rounded items-center justify-center" onClick={() => removeItem(item.id)}>-</button>
                <span className="flex-col items-center justify-center rounded text-lg font-bold p-4  inset-shadow-sm">{quantity} </span>
                <button className="flex-col p-4 shadow-md rounded items-center justify-center" onClick={() => addItem(item.id)}>+</button>
            </div>
            <div className="flex-col items-center justify-center mt-auto">
                <span className="flex text-lg  p-4 items-center justify-center "> szt: {item.price.main},{item.price.fractional} zł. </span>
                <span className="flex font-bold text-lg  p-4 items-center justify-center"> łącznie: {quantity*(item.price.main+item.price.fractional/100)} </span>
                <button className="flex items-cenetr justify-center bg-red-600 text-white py-2 px-4 rounded mt-4" onClick={() => clearCart(item.id)}>Usuń</button>
            </div>        
        </div>

    </Stack>
   )
}