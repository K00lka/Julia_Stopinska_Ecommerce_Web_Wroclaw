import { NavLink } from "react-router-dom";
import { Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { CartItem } from "../components/CartItem";
import ProductsList from '../data/products.json';

export const Cart = () => {
  const{ cartItems } = useCart();
  return(
   <>
      <div>
         <NavLink to="/" className='p-4 mt-2 md-2'>Cofnij</NavLink>
      </div>
      <Stack gap ={3}>
         {cartItems.map(item => 
         <CartItem key={item.id} {...item}  />)}
        
         <div className=""> Łącznie do zapłaty: {""}
         {cartItems.reduce((total, cartItem)=>{
            const item = ProductsList.find((item) => item.id === cartItem.id)
            return total + (item?(item.price.main+item.price.fractional/100):0) * cartItem.quantity
            }, 0)
         }
       </div>

      {cartItems.length>0&&<div className="mt-4 mb-4 p-4 flex justify-center item-center "><NavLink to="/Podsumowanie" className='flex p-4 mt-2 mb-2 rounded  items-center hover:bg-sky-700  text-white justify-center bg-blue-400 round h-10 w-35'>Zatwierdź</NavLink></div>}
      </Stack> 
      
   </> 
  )
}