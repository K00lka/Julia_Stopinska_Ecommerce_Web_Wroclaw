import ProductsList from '../data/products.json';
import { ProductCard } from '../components/ProductCard';



export const Marketplace = () => {
  
  console.log(ProductsList);

  return (
 <>   
 
 <div className="Products">
    {ProductsList.map((product) => (
     <ProductCard key={product.id} item={product} />
    ))}
    
 </div>
</>    
  )
  

}