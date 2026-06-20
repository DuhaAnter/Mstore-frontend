import ProductImage from "./ProductImage";
import { useNavigate } from "react-router";

export default function ProductsGrid({ products }) {
  //console.log(products);
  const navigate = useNavigate();
  return (
    <>
      {products?.map((product) => (
        <div
          className="card flex flex-col items-center rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 "
          onClick={() => {
            navigate(`/product-details/${product.id}`);
          }}
        >
         
          <ProductImage src={product.imageURL} />

          <div className="p-3 text-center">
            <p className="font-semibold">{product.title}</p>
            <p className=" text-gray-500 text-center">
              {product.description.split(" ").slice(0, 4).join(" ") + "..."}
            </p>
          
            <span className="font-semibold py-3">${product.minPrice}</span>
          </div>
        </div>
      ))}
    </>
  );
}
