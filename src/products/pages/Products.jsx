import { useEffect, useState } from "react";
import ProductsGrid from "../components/ProductsGrid";
import { allproducts } from "../api/products";
import { FaChevronDown } from "react-icons/fa6";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState("");
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const data = await allproducts();
        //console.log("✅ API Response of all products:", data);
        setProducts(data);
      } catch (error) {
        console.log(error);
        
        //setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);
 // console.log(products);
  if (loading) return <div>Loading products...</div>;
  //if (error) return <div>{error}</div>;

  return (
    <div className=" md:grid grid-cols-4 p-5">
      <div className="header col-span-4 mb-5">
        <h1 className=" text-4xl font-bold py-5">Clothes</h1>
      </div>
      <div className="sidebar  hidden md:block pr-5">
        <ul className="text-lg border-t border-t-gray-400">
          <li className="py-2 border-b border-b-gray-400 flex justify-between items-center">
            <span>one</span>
            <FaChevronDown className="fill-gray-400" />
          </li>
          <li className="py-2 border-b border-b-gray-400 flex justify-between items-center">
            <span>two</span>
            <FaChevronDown className="fill-gray-400" />
          </li>
          <li className="py-2 border-b border-b-gray-400 flex justify-between items-center">
            <span>three</span>
            <FaChevronDown className="fill-gray-400" />
          </li>
          <li className="py-2 border-b border-b-gray-400 flex justify-between items-center">
            <span>four</span>
            <FaChevronDown className="fill-gray-400" />
          </li>
          <li className="py-2 border-b border-b-gray-400 flex justify-between items-center">
            <span>five</span>
            <FaChevronDown className="fill-gray-400" />
          </li>
        </ul>
      </div>
      <div className="products col-span-3 ">
        {/* products grid component */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          <ProductsGrid products={products}></ProductsGrid>
        </div>
      </div>
    </div>
  );
}
