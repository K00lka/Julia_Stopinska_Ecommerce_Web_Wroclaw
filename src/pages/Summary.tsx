import { NavLink, Link } from "react-router-dom"
import { useCart } from "../context/CartContext";
import { SumItems } from "../components/SumItems";
import ProductsList from '../data/products.json';

import { Stack } from "react-bootstrap";
export const Summary = () => {
    const{ cartItems } = useCart();
    return <div>
        <NavLink to="/Koszyk" className='p-2'>Cofnij</NavLink>
        <div>
            <Stack gap ={3}>
                {cartItems.map(item => 
                <SumItems key={item.id} {...item}  />)}
                <div>Łącznie do zapłaty: {""} {cartItems.reduce((total, cartItem)=>{
                const item = ProductsList.find((item) => item.id === cartItem.id)
                return total + (item?(item.price.main+item.price.fractional/100):0) * cartItem.quantity
            }, 0)}
                </div> 
                

            </Stack> 
            {/* I've used "realoadDocument" because I wasn't sure if I understood the last task correctly
            Specifically I was not sure what was ment by realoding as new HTML. 
             */}
             {cartItems.length>0&&<div className="mt-4 mb-4 p-4 flex justify-center item-center ">
                <Link to="/Potwierdzenie" state={{cartItems:cartItems}} className='flex p-4 mt-2 mb-2 rounded  items-center hover:bg-sky-700  text-white justify-center bg-blue-400 round h-10 w-50' reloadDocument onClick={()=> {localStorage.clear();}}>Zamów i zapłać</Link>
                </div>}
            {/* I use here localStorage.clear() to empty the shopping cart and state={} 
            to forward the list of items to the /Confirmation.tsx, but the clearing method stopped workin after setting
            the github hosting, so I've added function clearAllCart, that sets items list to empty */}
        </div>
    </div>
}