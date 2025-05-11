import { Stack } from "react-bootstrap";
import ProductsList from '../data/products.json';


type ConfirmProps = {
    id: number
    quantity: number
}

export const Confirm = ({ id, quantity } : ConfirmProps) => {
    const item = ProductsList.find((item) => item.id === id)
    if (item == null) return null;

    return(
        <>
            <Stack direction="horizontal" gap={2} className="d-flex align-items-center  rounded-lg p-4">
                <span className="flex-col items-center justify-center bg-white  rounded-lg p-4">{quantity} x {item.name}</span>

            </Stack>
            
        </>

    )
    
}