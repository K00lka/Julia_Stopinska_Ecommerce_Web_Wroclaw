import type { Item } from "./types";

import {  useCart } from "../context/CartContext";


export const ProductCard = ({ item: product }:Item) => {
    const {itemQuantity, addItem, removeItem, clearCart} = useCart();
    const quantity = itemQuantity(product.id);
    
  return (
    <div className="flex-col items-center justify-center bg-white shadow-md rounded-lg p-4">
      <img src={product.image} alt={product.name} className="flex items-center justify-center  w-full h-48 object-cover rounded-t-lg" />
      <h2 className="flex items-center justify-center  text-xl font-semibold mt-2">{product.name}</h2>
      <p className="flex items-center justify-center  text-lg font-bold mt-2">{product.price.main},{product.price.fractional} zł.</p>
    
      <div className="flex items-center justify-center mt-auto">
        {quantity === 0 ? (
            <button className="flex items-cenetr justify-center bg-blue-500 hover:bg-sky-700 text-white py-2 px-4 rounded mt-4" onClick={()=> addItem(product.id)}>Do Koszyka</button>
            ) : (<div className="flex-col bg-green shadow-md rounded-lg p-4 items-center justify-center w" >
                <div className="flex-col shadow-md rounded-lg items-center justify-center">
                    <button className="text-[40px]" onClick={()=> removeItem(product.id)}>-</button>
                    <span className=" text-lg font-bold p-4 ">{quantity}</span>
                    <button className="text-[30px]" onClick={()=> addItem(product.id)} >+</button>
                </div>
                <button className="flex items-cenetr justify-center bg-red-600 text-white py-2 px-4 rounded mt-4" onClick={() => clearCart(product.id)}>Usuń</button>
            </div> 
                
            )
            }
      </div>
    </div>
  );
}