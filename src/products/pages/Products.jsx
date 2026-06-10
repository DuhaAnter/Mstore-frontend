import ProductsGrid from "../components/ProductsGrid";


export default function Products() {
  return (
    <div className=" md:grid grid-cols-4 p-5">
        <div className="header col-span-4">
            <h1 className=" text-4xl font-bold py-5">Clothes</h1>
        </div>
        <div className="sidebar  hidden md:block pr-5">
            <ul className="text-xl border-t border-t-gray-500">
                <li className="py-2 border-b border-b-gray-500">one</li>
                <li className="py-2 border-b border-b-gray-500">two</li>
                <li className="py-2 border-b border-b-gray-500">three</li>
                <li className="py-2 border-b border-b-gray-500">four</li>
            </ul>
        </div>
        <div className="products col-span-3 ">
            {/* products grid component */}
            <ProductsGrid></ProductsGrid>
        </div>

      
    </div>
  );
}
