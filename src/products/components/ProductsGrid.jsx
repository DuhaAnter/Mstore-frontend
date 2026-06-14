import ProductImage from "./ProductImage";

export default function ProductsGrid({ products }) {
  console.log(products);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product) => (
        <div className="card flex flex-col items-center rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ">
          <ProductImage src={product.images[0]} />
          <div className="p-3 text-center">
            <p className="font-semibold">{product.title}</p>
            <p className=" text-gray-500 text-center">
              {product.description.split(" ").slice(0, 4).join(" ") + "..."}
            </p>
            <span className="font-semibold py-3">${product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
