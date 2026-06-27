import { useState } from "react";
import OrderSummary from "../components/OrderSummary";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  //independent counts for independent products
  const [count1, setCount1] = useState(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 md:p-10">
      <div className="cart lg:col-span-2 space-y-6">
        <h1 className="font-bold text-2xl md:text-3xl mb-5">My Cart</h1>
        <hr className="border-gray-200" />

        <div className="prd flex items-center gap-4 mt-5 border-b border-gray-100 pb-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 shrink overflow-hidden rounded-xl">
            <img
              src="/imgs/photo_٢٠٢٦-٠٥-٠٧_٠٠-٥٨-٠٩.jpg"
              className="w-full h-full object-cover"
              alt="Pink Dress"
            />
          </div>

          <div className="flex-1 grid grid-cols-3">
            <div className="col-span-2 flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <h1 className="font-semibold text-lg md:text-2xl truncate">
                  Pink Dress
                </h1>
                <div className="flex items-center gap-1">
                  <span className="text-lg text-[#ffc107]">★★★★★</span>
                  <span className=" text-[8px] sm:text-xs text-gray-500">
                    (3 Reviews)
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-xs md:text-lg line-clamp-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                deleniti quasi vero porro.
              </p>

              <p className="text-xs md:text-sm">
                <strong>Size: </strong> small
              </p>
              <p className="text-xs md:text-sm">
                <strong>Color: </strong> black
              </p>

              <div className="flex items-center bg-gray-100 rounded px-2.5 py-1 w-25">
                <button
                  onClick={() => setCount1(Math.max(1, count1 - 1))}
                  className="cursor-pointer text-lg font-bold text-gray-500 hover:text-black w-6 h-6 flex items-center justify-center transition"
                >
                  {count1 === 1 ? <FaTrash /> : "−"}
                </button>
                <span className="mx-3 text-sm md:text-base font-semibold w-4 text-center select-none">
                  {count1}
                </span>
                <button
                  onClick={() => setCount1(count1 + 1)}
                  className="cursor-pointer text-lg font-bold text-gray-500 hover:text-black w-6 h-6 flex items-center justify-center transition"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-end items-start mt-2">
              <p className="text-lg md:text-xl font-bold">$100</p>
            </div>
          </div>
        </div>
      </div>

      <div className="order lg:col-span-1">
        <div className="lg:sticky lg:top-24">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
