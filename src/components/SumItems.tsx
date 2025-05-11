import { Stack } from "react-bootstrap";
import ProductsList from '../data/products.json';


type SumItemsProps = {
    id: number
    quantity: number
}

export const SumItems = ({ id, quantity } : SumItemsProps) => {
    const item = ProductsList.find((item) => item.id === id)
    if (item == null) return null;

    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center  rounded-lg p-4">
            <span className="flex-col items-center justify-center bg-white  rounded-lg p-4">{quantity} x {item.name}</span>
            <span className="flex-col items-center justify-center bg-white  rounded-lg p-4"> {item.price.main},{item.price.fractional} zł. </span>
            <span className="flex-col items-center justify-center bg-white  rounded-lg p-4"> Razem: {quantity*(item.price.main+item.price.fractional/100)} zł. </span>
        </Stack>

    )
    
}