import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productById, relatedProducts } from "../api/products";
import ProductsGrid from "../components/ProductsGrid";

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState("black");

  const colors = [
    { id: "orange", color: "bg-orange-500" },
    { id: "green", color: "bg-green-400" },
    { id: "black", color: "bg-black" },
    { id: "white", color: "bg-white border border-gray-300" },
  ];

  const [selectedSize, setSelectedSize] = useState("L");

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const [count, setCount] = useState(1);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchProductById = async () => {
        try {
          const data = await productById(id);

          setProduct(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchProductById();
    }
  }, [id]);
  useEffect(() => {
    //safe guard --> Don't fetch related products if category doesn't exist yet
    if (!product || !product.category) return;

    const fetchRelatedProducts = async () => {
      try {
        const data = await relatedProducts(product.category);
        setProducts(data.products);
        console.log(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRelatedProducts();
  }, [product?.category]);

  if (loading) {
    return <div>waiiiiiiiiiiiiiiiiiiiiiiiiit</div>;
  }

  return (
    <div className="p-4 md:p-10 max-w-7xl mx-auto">
      <div className="prd flex flex-col lg:flex-row gap-6 ">
        <div className="lg:w-1/2 aspect-square overflow-hidden rounded-3xl">
          <img
            src={product.images?.[0]}
            alt="Pink Dress"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col">
          <h1 className="font-bold text-3xl md:text-4xl">{product.title}</h1>

          <div className="flex items-center gap-3 mt-2">
            <span className="text-3xl text-[#ffc107]">★★★★★</span>
            <span className="text-sm text-gray-500">
              ({product.reviews.length} Reviews)
            </span>
          </div>

          <p className="text-3xl font-semibold mt-4">${product.price}</p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Variations */}
          <div className="mt-8 space-y-6">
            {/* Color */}
            <div>
              <p className="font-medium mb-2">Color</p>
              <div className="flex gap-3">
                {colors.map(({ id, color }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedColor(id)}
                    className={`
                  w-9 h-9 rounded-full p-1 transition-all duration-200
                  ${
                    selectedColor === id
                      ? "ring-1 ring-black ring-offset-1 scale-110"
                      : "hover:scale-105"
                  }
                `}
                  >
                    <div
                      className={`${color} w-full h-full rounded-full shadow-sm`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <p className="font-medium mb-2">Size</p>
              <div className="flex gap-3 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                  w-12 h-12 rounded-2xl border-2 transition-all duration-200 text-sm font-medium
                  ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "border-gray-300 hover:border-gray-400"
                  }
                `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center bg-gray-100 rounded-2xl px-6 py-4">
              <button
                onClick={() => setCount(Math.max(1, count - 1))}
                className="cursor-pointer text-3xl text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center transition"
              >
                −
              </button>
              <span className="mx-6 text-2xl font-medium w-8 text-center">
                {count}
              </span>
              <button
                onClick={() => setCount(count + 1)}
                className="cursor-pointer text-3xl text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center transition"
              >
                +
              </button>
            </div>

            <button className="cursor-pointer flex-1 bg-black text-white rounded-2xl py-4 text-lg font-medium hover:bg-gray-900 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="related mt-16">
        <h2 className="text-2xl font-semibold mb-6">Related Items</h2>
        {/* related products grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ProductsGrid products={products}></ProductsGrid>
        </div>
      </div>
    </div>
  );
}
