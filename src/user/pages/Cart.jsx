import { useEffect, useState } from "react";
import OrderSummary from "../components/OrderSummary";
import { FaTrash } from "react-icons/fa";
import { removeCartItem, updateCartItem, viewCart } from "../api/cart";

export default function Cart() {
  const [loading, setLoading] = useState(true);
  const [variants, setVariants] = useState([]);

  // calling api
  useEffect(() => {
    const fetchViewCart = async () => {
      try {
        const data = await viewCart();
        // console.log("data of view cart -->", data.data);
        setVariants(data.data);
      } catch (error) {
        console.log("error fetching veiw cart", error);
      } finally {
        setLoading(false);
      }
    };
    fetchViewCart();
  }, [variants]);
  //handlers
  const handleItemQuantity = async (id, quantity) => {
    try {
      const update = await updateCartItem(id, quantity);
      console.log(update);
    } catch (error) {
      console.log("error in handle item quantity", error);
    }
  };
  const handleItemDelete = async (id) => {
    try {
      const remove = await removeCartItem(id);
      console.log(remove);
    } catch (error) {
      console.log("error deleting item", error);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <p>loading cart</p>
      </div>
    );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 md:p-10">
      <div className="cart lg:col-span-2 space-y-6">
        <h1 className="font-bold text-2xl md:text-3xl mb-5">My Cart</h1>
        <hr className="border-gray-200" />

        {variants?.map((v) => (
          <div
            key={v.id}
            className="prd flex items-center gap-4 mt-5 border-b border-gray-100 pb-6"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 shrink overflow-hidden rounded-xl">
              <img
                src={v.variant.product.imageURL}
                className="w-full h-full object-cover"
                alt="Pink Dress"
              />
            </div>

            <div className="flex-1 grid grid-cols-3 ">
              <div className="col-span-2 flex flex-col gap-1">
                <div className="flex flex-col">
                  <h1 className="font-semibold text-lg md:text-2xl truncate">
                    {v.variant.product.title}
                  </h1>
                  <div className="flex items-center gap-1">
                    <span className="text-lg text-[#ffc107]">★★★★★</span>
                    <span className=" text-[8px] sm:text-xs text-gray-500">
                      (3 Reviews)
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs md:text-lg line-clamp-2 ">
                  {v.variant.product.description}
                </p>

                <p className="text-xs md:text-sm">
                  <strong>Size: </strong>
                  {v.variant.size}
                </p>
                <p className="text-xs md:text-sm">
                  <strong>Color: </strong>
                  {v.variant.color}
                </p>
                <div className="flex items-center  gap-3">
                  <div className="flex items-center bg-gray-100 rounded px-2.5 py-1 w-25">
                    <button
                      // onClick={() => setCount1(Math.max(1, v.quantity - 1))}
                      onClick={() => handleItemQuantity(v.id, v.quantity - 1)}
                      className="cursor-pointer text-lg font-bold text-gray-500 hover:text-black w-6 h-6 flex items-center justify-center transition"
                    >
                      {v.quantity === 1 ? <FaTrash /> : "−"}
                    </button>
                    <span className="mx-3 text-sm md:text-base font-semibold w-4 text-center select-none">
                      {v.quantity}
                    </span>
                    <button
                      onClick={() => handleItemQuantity(v.id, v.quantity + 1)}
                      // onClick={() => setCount1(v.quantity + 1)}
                      className="cursor-pointer text-lg font-bold text-gray-500 hover:text-black w-6 h-6 flex items-center justify-center transition"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleItemDelete(v.id)}
                    className="pl-3 border-l border-gray-300 text-xs md:text-sm font-medium text-gray-500 hover:text-red-600 hover:underline transition-colors cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="flex justify-end items-start mt-2">
                <p className="text-lg md:text-xl font-bold">
                  $ {v.variant.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="order lg:col-span-1">
        <div className="lg:sticky lg:top-24">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
