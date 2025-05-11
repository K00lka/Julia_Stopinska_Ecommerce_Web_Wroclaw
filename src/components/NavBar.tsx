
import {  NavLink } from 'react-router-dom';

export const NavBar = () =>{
    return <div className="flex justify-between items-center shadow-md mt-1 mb-3"> 
        <NavLink to="/" className='p-3'>Marketplace</NavLink> 
        <NavLink className='p-3' to="/Koszyk">Koszyk</NavLink>
    </div>
}
